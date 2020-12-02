//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Colors, WP } from '../../../../../Theme';

// create a component
const CustomDateTimePicker = (props) => {
    console.log("showing props fro getting time and date", props)
    return (
        <View>

            <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
            <DatePicker
                style={props.isEditClass ? styles.inputFieldEditClass : styles.inputField}
                date={props.date}
                mode={'date'}
                placeholder="Select Date"
                format="DD MMMM YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                onDateChange={(date) => props.onDateChange(date)}
                customStyles={{
                    dateInput: {
                        borderWidth: 0,
                        alignItems: 'flex-start',
                    },
                    placeholderText: {
                        color: Colors.pickerBorder
                    },
                    dateText: {
                        color: Colors.grey,
                        fontSize: WP('4'),
                        fontFamily: 'Assistant-Regular'

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
        fontSize: WP('4'),
        fontFamily: 'Assistant-Regular'

    },
    inputFieldEditClass: {
        display: 'flex',
        width: WP('90'),
        height: WP('13'),
        borderBottomWidth: 1,
        borderColor: Colors.containerBorder,
        alignItems: 'center',
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
    }
});

//make this component available to the app
export default CustomDateTimePicker;
