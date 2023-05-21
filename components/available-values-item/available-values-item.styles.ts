import { StyleSheet } from 'react-native';

import { CellSizeConstant } from '../../constants/dimensions.contant';
import { Colors } from '../theme';

const progressHeight = 2;

export const AvailableValuesItemStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderBottomColor: Colors.value.progress,
        borderBottomWidth: progressHeight,
        borderColor: Colors.value.border,
        borderWidth: 1,
        height: CellSizeConstant,
        justifyContent: 'center',
        width: CellSizeConstant
    },
    container: {
        position: 'relative'
    },
    progress: {
        backgroundColor: 'green',
        height: progressHeight,
        left: 0,
        position: 'absolute',
        top: CellSizeConstant - progressHeight
    },
    text: { color: Colors.value.text },
    textActive: {
        color: Colors.cell.activeValueText
    },
    wrapperActive: {
        backgroundColor: Colors.cell.highlightedText
    }
});
