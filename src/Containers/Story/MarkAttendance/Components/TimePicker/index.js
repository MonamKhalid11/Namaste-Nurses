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
    function tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
            time[3] = ' '
        }
        return time.join('') // return adjusted time or original string
    }
    return (

        <View style={[styles.container, props.inputContainerStyles]}>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
            <TouchableOpacity style={props.isEditClass ? styles.inputFieldEditClass : styles.inputField}
                onPress={showDatePicker}>
                {pickedDate && !props.placeholder ?
                    <Text allowFontScaling={false} style={styles.picked} >{pickedDate}</Text>
                    :
                    <Text allowFontScaling={false} style={[props.placeholder ? styles.picked : styles.placeholder]} >{props.placeholder ? tConvert(props.placeholder) : "Select time"}</Text>
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
        fontSize: WP('4'),
        fontFamily: 'Assistant-Regular'

    },
    inputFieldEditClass: {
        display: 'flex',
        width: WP('90'),
        height: WP('13'),
        borderBottomWidth: 1,
        borderColor: Colors.containerBorder,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: WP('3'),
        marginBottom: WP('3'),
        fontSize: WP('4'),
        fontFamily: 'Assistant-Regular'
    },
    title: {
        color: Colors.grey,
        fontSize: WP('5'),
        marginBottom: WP('3'),
        fontFamily: 'Assistant-Regular'

    },
    placeholder: {
        color: Colors.pickerBorder,
        fontSize: WP('4'),
        fontFamily: 'Assistant-Regular'
    },
    picked: {
        color: Colors.grey,
        fontSize: WP('4'),
        fontFamily: 'Assistant-Regular'

    }
});

//make this component available to the app
export default TimePicker;
