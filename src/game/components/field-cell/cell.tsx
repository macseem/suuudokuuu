import { cs, type OnEventFn } from '@rnw-community/shared';
import { memo, useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import Reanimated, { interpolate, interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';

import { Colors } from '../../../@generic';
import { animationDurationConstant } from '../../../@generic/constants/animation.constant';
import { BlankCellValueConstant } from '../../constants/blank-cell-value.constant';
import { CellFontSizeConstant } from '../../constants/dimensions.contant';
import { FieldGroupWidthConstant, FieldSizeConstant } from '../../constants/field.constant';
import { type CellInterface } from '../../interfaces/cell.interface';

import { CellStyles as styles } from './cell.styles';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const isGroupEnd = (index: number): boolean => {
    return index < FieldSizeConstant - 1 && (index + 1) % FieldGroupWidthConstant === 0;
};

interface Props {
    cell: CellInterface;
    onSelect: OnEventFn<CellInterface | undefined>;
    isScored: boolean;
    isActive: boolean;
    isActiveValue: boolean;
    isCellHighlighted: boolean;
}

const getCellBgColor = (isActiveValue: boolean, isCellHighlighted: boolean) => {
    if (isActiveValue) {
        return Colors.cell.activeValue;
    } else if (isCellHighlighted) {
        return Colors.cell.highlighted;
    }

    return Colors.white;
};

// TODO: We need animations logic improvements
const CellComponent = ({ cell, onSelect, isActive, isActiveValue, isCellHighlighted, isScored = true }: Props) => {
    const value = cell.value === BlankCellValueConstant ? '' : cell.value.toString();
    const isLastRow = cell.y === 8;
    const isLastCol = cell.x === 8;
    const backgroundColor = getCellBgColor(isActiveValue, isCellHighlighted);

    const activeAnimation = useDerivedValue(() => {
        return withTiming(isActive ? 1 : 0, { duration: animationDurationConstant });
    });
    const scoreAnimation = useSharedValue(0);

    useEffect(() => {
        if (isScored) {
            scoreAnimation.value = 0;
            scoreAnimation.value = withTiming(1, { duration: 8 * animationDurationConstant });
        }
    }, [isScored]);

    const cellAnimatedStyles = useAnimatedStyle(
        () => ({
            backgroundColor: interpolateColor(activeAnimation.value, [0, 1], [backgroundColor, Colors.cell.active])
        }),
        [backgroundColor]
    );
    const textAnimatedStyles = useAnimatedStyle(
        () => ({
            color: interpolateColor(scoreAnimation.value, [0, 0.5, 1], [Colors.black, Colors.cell.highlightedText, Colors.black]),
            fontSize: interpolate(
                scoreAnimation.value,
                [0, 0.5, 1],
                [CellFontSizeConstant, CellFontSizeConstant * 2, CellFontSizeConstant]
            ),
            transform: [{ rotate: `${interpolate(scoreAnimation.value, [0, 1], [0, 360])}deg` }]
        }),
        [backgroundColor]
    );

    const handlePress = () => void onSelect(isActive ? undefined : cell);

    const cellStyles = [
        styles.cell,
        cs(isGroupEnd(cell.x), styles.cellGroupXEnd),
        cs(isGroupEnd(cell.y), styles.cellGroupYEnd),
        cs(isLastRow, styles.cellLastRow),
        cs(isLastCol, styles.cellLastCol),
        cellAnimatedStyles
    ];
    const textStyles = [
        styles.cellText,
        cs(isActiveValue, styles.cellActiveValueText),
        cs(isActive, styles.cellActiveText),
        textAnimatedStyles
    ];

    return (
        <ReanimatedPressable style={cellStyles} onPress={handlePress}>
            <Animated.Text style={textStyles}>{value}</Animated.Text>
        </ReanimatedPressable>
    );
};

export const Cell = memo(CellComponent);
