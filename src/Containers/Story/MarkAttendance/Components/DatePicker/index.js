//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import DatePicker from 'react-native-datepicker'
import CalendarPicker from 'react-native-calendar-picker';

import { Colors, WP, Layout } from '../../../../../Theme';
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const CustomDateTimePicker = (props) => {
    console.log("showing props fro getting time and date", props)
    const [showPreviousDatePickerModal, setshowPreviousDatePickerModal] = useState(false)
    const [date, setDate] = useState(moment().format('DD MMMM YYYY'))

    const datePicked = (date) => {
        setshowPreviousDatePickerModal(false)
        setDate(moment(date).format('DD MMMM YYYY'))
        props.onDateChange(date)
    }
    return (
        <View>
            <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
            {showPreviousDatePickerModal &&
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showPreviousDatePickerModal}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.calendarView}>
                                <CalendarPicker
                                    startFromMonday={true}
                                    selectedDayColor="#7300e6"
                                    selectedDayTextColor="#FFFFFF"
                                    onDateChange={(date) => datePicked(date)}
                                    maxDate={moment()}
                                />
                            </View>

                        </View>
                    </Modal>
                </View>
            }
            <TouchableOpacity style={styles.inputField}
                onPress={() => setshowPreviousDatePickerModal(true)}
            >
                <Text style={styles.placeholder}>{date}</Text>
            </TouchableOpacity>

            {/* <DatePicker
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
            /> */}

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
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: WP('3'),
        marginBottom: WP('3'),
        fontSize: WP('4'),
        fontFamily: 'Assistant-Regular'

    },
    calendarView: {
        // width: '80%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    },
    placeholder: {
        color: Colors.grey,
        fontSize: WP('4'),
        fontFamily: 'Assistant-Regular'
    },
});

//make this component available to the app
export default CustomDateTimePicker;
