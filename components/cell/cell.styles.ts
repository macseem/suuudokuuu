import { StyleSheet } from 'react-native';

import { cellSize } from '../../constants/dimensions.contant';

// TODO: Add style theming support
export const CellStyles = StyleSheet.create({
    cell: {
        alignItems: 'center',
        borderColor: 'black',
        borderLeftWidth: 1,
        borderStyle: 'solid',
        borderTopWidth: 1,
        flex: 1,
        fontFamily: 'Inter_500Medium',
        height: cellSize,
        justifyContent: 'center',
        width: cellSize
    },
    cellActive: {
        backgroundColor: 'green'
    },
    cellHighlighted: {
        backgroundColor: 'rgba(0,0,0,0.05)'
    },
    cellLastCol: {
        borderRightWidth: 1
    },
    cellLastGroup: {
        borderRightWidth: 2
    },
    cellLastRow: {
        borderBottomWidth: 1
    },
    cellText: {
        fontSize: 16
    },
    cellTextActive: {
        color: 'white'
    },
    cellTextHighlighted: {
        color: 'green',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cellValueHighlighted: {
        backgroundColor: 'rgba(201, 242, 155, 0.5)'
    }
});
