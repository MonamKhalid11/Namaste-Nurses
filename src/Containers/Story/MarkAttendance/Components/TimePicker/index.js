//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Colors, WP } from '../../../../../Theme';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CalendarPicker from 'react-native-calendar-picker';

import moment from 'moment'
// create a component
const TimePicker = (props) => {
    const [pickedDate, setPickedDate] = useState(format12Hours(new Date()))
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("showing values in date here are", date)
        setPickedDate(format12Hours(new Date(date)))
        props.onTimeChange(formatAMPM(new Date(date)))
        hideDatePicker();
    };

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        // var ampm = hours >= 12 ? 'pm' : 'am';
        // hours = hours % 12;
        // hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes;
        return strTime;
    }

    function format12Hours(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }


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
                is24Hour={true}
                mode="time"
                headerTextIOS="Pick Time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
            <TouchableOpacity style={props.isEditClass ? styles.inputFieldEditClass : styles.inputField}
                onPress={showDatePicker}>

                <Text allowFontScaling={false} style={styles.picked} >{pickedDate}</Text>

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
