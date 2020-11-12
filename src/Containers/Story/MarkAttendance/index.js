//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import { useTranslation } from 'react-i18next'
import { Colors, WP } from '../../../Theme';
import Picker from './Components/Picker'
import CustomDateTimePicker from './Components/DatePicker'
import SessionInput from './Components/SessionInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../../Components/CustomButton'
import OptionsListing from './Components/OptionsList'
// create a component
const MarkAttendance = (props) => {
    const { t } = useTranslation()
    const [date, SetDate] = useState(null)
    const [time, SetTime] = useState(null)
    const [classesTypes, setClassesTypes] = useState([
        {
            id: 1,
            title: t('markScreen.option1'),
            isSelected: false
        },
        {
            id: 2,
            title: t('markScreen.option2'),
            isSelected: false
        },
        {
            id: 3,
            title: t('markScreen.option3'),
            isSelected: false
        },
        {
            id: 4,
            title: t('markScreen.option4'),
            isSelected: false
        },
        {
            id: 5,
            title: t('markScreen.option5'),
            isSelected: false
        },
        {
            id: 6,
            title: t('markScreen.option6'),
            isSelected: false
        },
        {
            id: 7,
            title: t('markScreen.option7'),
            isSelected: false
        },

    ])

    return (
        <View style={styles.container}>
            <CustomHeader
                screenTitle={t('markScreen.title')}
                navigation={props.navigation}
            />
            <KeyboardAwareScrollView >
                <View style={styles.domainContainer}>
                    <Picker />
                    <CustomDateTimePicker isDate={true} date={date} onDateChange={SetDate} title={t('markScreen.date')} />
                    <CustomDateTimePicker isDate={false} time={time} onTimeChange={SetTime} title={t('markScreen.time')} />
                    <SessionInput title={t('markScreen.people')} placeholder={t('markScreen.peoplePlaceHolder')} keyboardType={'numeric'} />
                    <OptionsListing classesTypes={classesTypes} title={t('markScreen.type')} subTitle={t('markScreen.select')} />
                    < SessionInput title={t('markScreen.location')} placeholder={t('markScreen.locationPlaceHolder')} />
                    <SessionInput title={t('markScreen.session')} placeholder={t('markScreen.sessionPlaceHolder')} />
                    <SessionInput title={t('markScreen.notes')} placeholder={t('markScreen.notesPlaceHolder')} isNotes={true} />
                    <CustomButton title={t('markScreen.submit')} bgColor={Colors.appColor} titleColor={Colors.white} onPress={() => props.navigation.navigate('AttendanceMarked')} />
                </View>
            </KeyboardAwareScrollView>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    domainContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        padding: WP('5')
    },
});

//make this component available to the app
export default MarkAttendance;
