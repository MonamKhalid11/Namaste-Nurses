//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Colors, WP } from '../../../../../Theme';

// create a component
const CustomDateTimePicker = (props) => {
    return (
        <>
            {props.isDate ?
                <View>
                    <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
                    <DatePicker
                        style={styles.inputField}
                        date={props.date}
                        mode='date'
                        placeholder="Select Date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        onDateChange={(date) => props.onDateChange(date)}
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                                alignItems: 'flex-start'
                            }
                        }}
                    />
                </View>
                :
                <View>
                    <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
                    <DatePicker
                        style={styles.inputField}
                        value={props.time}
                        mode={'time'}
                        placeholder="Select Time"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        onDateChange={(date) => props.onTimeChange(date)}
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                                alignItems: 'flex-start',
                            }
                        }}
                    />
                </View>

            }
        </>
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
        marginBottom: WP('3')
    },
    title: {
        color: Colors.grey,
        fontSize: WP('3'),
        marginBottom: WP('3')
    }
});

//make this component available to the app
export default CustomDateTimePicker;
