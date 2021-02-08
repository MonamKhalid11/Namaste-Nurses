//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors, Images, Layout, WP } from '../../Theme';
import { useTranslation } from 'react-i18next'

const CustomDropDown = (props) => {
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([{ label: 'MADHYA PRADESH', value: 'item1' }, { label: 'PUNJAB', value: 'item2' }, { label: 'MAHARASHATRA', value: 'item3' }, { label: 'KARNATAKA', value: 'item4' }]);
    const { t } = useTranslation()
    let controller;
    return (
        <DropDownPicker
            items={items}
            style={{ transform: [{ rotate: '180deg' }] }}
            arrowColor={Colors.appColor}
            customArrowUp={() => <Image source={Images.forward} style={styles.accessoryUp} />}
            customArrowDown={() => <Image source={Images.forward} style={styles.accessory} />}
            placeholder={t('states.placeholder')}
            containerStyle={Layout.dropDownContainer}
            controller={instance => controller = instance}
            onChangeList={(items, callback) => {
                new Promise((resolve, reject) => resolve(setItems(items)))
                    .then(() => callback())
                    .catch(() => { });
            }}
            defaultValue={props.value}
            onChangeItem={item => props.setValue(item.value)}
            dropDownStyle={{
                transform: [{ rotate: '180deg' }],
                fontFamily: 'Assistant-Bold',
                backgroundColor: Colors.inputGrey,
            }}
            selectedLabelStyle={{
                color: Colors.grey,
                fontFamily: 'Assistant-Bold',
            }}
            placeholderStyle={{
                fontFamily: 'Assistant-SemiBold',
                color: Colors.grey
            }}
            itemStyle={{
                fontFamily: 'Assistant-Bold',
                color: Colors.grey,
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            }}

        />

    )

};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    accessory: {
        height: WP('5'),
        width: WP('5'),
        resizeMode: 'contain',
        tintColor: Colors.appColor,
    },
    accessoryUp: {
        height: WP('5'),
        width: WP('5'),
        resizeMode: 'contain',
        tintColor: Colors.appColor,
        transform: [{ rotate: '90deg' }]
    },
});

//make this component available to the app
export default CustomDropDown;
