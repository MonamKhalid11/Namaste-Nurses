//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Colors, WP } from '../../../../../Theme';

// create a component
const TimePicker = (props) => {
    console.log("showing props fro getting time", props)
    useEffect(() => {

    }, [props.time])
    return (

        <View>
            <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
            <DatePicker
                style={styles.inputField}
                date={props.time}
                mode={'time'}
                placeholder="Select Time"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                is24Hour={false}
                showIcon={false}
                onDateChange={props.onTimeChange}
                customStyles={{
                    dateInput: {
                        borderWidth: 0,
                        alignItems: 'flex-start',
                    },
                    placeholderText: {
                        color: Colors.pickerBorder
                    }
                }}
            />
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
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
        marginBottom: WP('3'),
    },
    title: {
        color: Colors.grey,
        fontSize: WP('3'),
        marginBottom: WP('3')
    }
});

//make this component available to the app
export default TimePicker;
