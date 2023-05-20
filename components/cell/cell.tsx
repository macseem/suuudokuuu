import { cs } from '@rnw-community/shared';
import { memo } from 'react';
import { Pressable, Text } from 'react-native';

import { BlankCellValueContant } from '../../constants/blank-cell-value.contant';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import { type CellInterface } from '../../interfaces/cell.interface';
import { appRootSelectCellAction } from '../../store/app-root/app-root.actions';
import { appRootSelectedCellSelector } from '../../store/app-root/app-root.selectors';
import { isSameCell } from '../../utils/cell/is-same-cell.util';

import { CellStyles as styles } from './cell.styles';

interface Props {
    cell: CellInterface;
    isLastGroup?: boolean;
    isLastRow?: boolean;
    isHighlighted?: boolean;
}

const CellComponent = ({ cell, isLastGroup = false, isLastRow = false, isHighlighted = false }: Props) => {
    const dispatch = useAppDispatch();
    const selectedCell = useAppSelector(appRootSelectedCellSelector);

    const isActive = isSameCell(cell, selectedCell);
    const isActiveValue = cell.value === selectedCell?.value && cell.value !== BlankCellValueContant;
    const isLastCol = cell.y === 8;
    const value = cell.value === BlankCellValueContant ? '' : cell.value.toString();

    const handlePress = () => void dispatch(appRootSelectCellAction(isActive ? undefined : cell));

    const cellStyles = [
        styles.cell,
        cs(isLastGroup, styles.cellLastGroup),
        cs(isLastRow, styles.cellLastRow),
        cs(isHighlighted, styles.cellHighlighted),
        cs(isActiveValue, styles.cellValueHighlighted),
        cs(isActive, styles.cellActive),
        cs(isLastCol, styles.cellLastCol)
    ];
    const textStyles = [styles.cellText, cs(isActiveValue, styles.cellTextHighlighted), cs(isActive, styles.cellTextActive)];

    return (
        <Pressable style={cellStyles} onPress={handlePress}>
            <Text style={textStyles}>{value}</Text>
        </Pressable>
    );
};

export const Cell = memo(CellComponent);
