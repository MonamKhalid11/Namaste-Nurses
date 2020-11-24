//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors, WP } from '../../../../Theme';

// create a component
const MedicalConditionsPicker = (props) => {
    console.log("showing passed params", props)
    const [name, setName] = useState(null)
    useEffect(() => {
        if (props.placeholder.length > 0) {
            setName(props.placeholder[0].name)
        }
    }, [])
    return (
        <>
            <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
            <DropDownPicker
                zIndex={5000}
                style={styles.inputField}
                showArrow={false}
                items={props.items}
                controller={instance => controller = instance}
                onChangeList={(items, callback) => {
                    new Promise((resolve, reject) => resolve(props.setItems(items)))
                        .then(() => callback())
                        .catch(() => { });
                }}

                defaultValue={props.value}
                placeholder={name ? name : 'Tap to select'}
                onChangeItem={item => { props.setValue(item.value), props.pickedMedicalValue(item) }}
            />

        </>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    inputField: {
        display: 'flex',
        width: WP('90'),
        height: WP('13'),
        borderWidth: 1,
        borderColor: Colors.containerBorder,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: WP('3'),
        marginBottom: WP('3')
    },
    title: {
        color: Colors.grey,
        fontSize: WP('3'),
        marginBottom: WP('3')
    }
});

//make this component available to the app
export default MedicalConditionsPicker;
