//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Colors, WP } from '../../../../../Theme';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
// create a component
const TimePicker = (props) => {
    const [pickedDate, setPickedDate] = useState(null)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let datePicked = moment(date).format('HH:MM')
        setPickedDate(datePicked)
        props.onTimeChange(datePicked)
        hideDatePicker();
    };
    // const setTime = (event, date) => {
    //     try {
    //         if (date !== undefined) {
    //             let datePicked = moment(date).format('HH:MM')
    //             setPickedDate(datePicked)
    //             props.onTimeChange(datePicked)
    //             toggleModal(false)
    //             // Use the hour and minute from the date object
    //         }
    //     } catch (error) {

    //     }
    // };
    return (

        <View style={[styles.container, props.inputContainerStyles]}>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
            <TouchableOpacity style={styles.inputField} onPress={showDatePicker}>
                {pickedDate ?
                    <Text allowFontScaling={false} style={styles.picked} >{pickedDate}</Text>
                    :
                    <Text allowFontScaling={false} style={styles.placeholder} >Select time</Text>
                }
            </TouchableOpacity>
        </View>
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: WP('3'),
        marginBottom: WP('3'),
    },
    title: {
        color: Colors.grey,
        fontSize: WP('3'),
        marginBottom: WP('3')
    },
    placeholder: {
        color: Colors.pickerBorder,
        fontSize: WP('3'),
    },
    picked: {
        color: Colors.grey,
        fontSize: WP('3'),
    }
});

//make this component available to the app
export default TimePicker;
