import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../hooks/redux.hook';
import { appRootSelectValueAction } from '../../store/app-root/actions/app-root-select-value.action';
import { appRootAvailableValuesSelector } from '../../store/app-root/app-root.selectors';
import { AvailableValuesItem } from '../available-values-item/available-values-item';

import { AvailableValuesStyles as styles } from './available-values.styles';

const getValueProgress = (allValues: Record<number, number>, value: number) => (allValues[value] / 9) * 100;

export const AvailableValues = () => {
    const allValues = useSelector(appRootAvailableValuesSelector);
    const availableValues = Object.keys(allValues)
        .filter(key => allValues[Number(key)] < 9)
        .map(Number);

    const dispatch = useAppDispatch();
    const handleSelect = (value: number) => void dispatch(appRootSelectValueAction(value));

    return (
        <View style={styles.wrapper}>
            {availableValues.map(value => (
                <AvailableValuesItem
                    value={value}
                    key={value}
                    onSelect={handleSelect}
                    isActive={false}
                    progress={getValueProgress(allValues, value)}
                />
            ))}
        </View>
    );
};
