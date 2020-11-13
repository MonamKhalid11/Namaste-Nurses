//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
import { useTranslation } from 'react-i18next'
import AvatarContainer from '../../../Components/Avatar'
import SessionInput from '../MarkAttendance/Components/SessionInput'
import CustomDateTimePicker from '../MarkAttendance/Components/DatePicker'
import OptionsListing from '../MarkAttendance/Components/OptionsList'
// create a component
const EditProfile = (props) => {
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
                headerColor={Colors.secondaryColor}
                screenTitle={'Edit Profile'}
                navigation={props.navigation}
            />
            <ScrollView contentContainerStyle={styles.scrollingContainer}>
                <AvatarContainer
                    isEdit={true}
                />
                <Text allowFontScaling={false} style={styles.title}>{t('profile.personal')}</Text>
                < SessionInput title={t('editprofile.name')} placeholder={t('editprofile.locationPlaceHolder')} />
                <SessionInput title={t('editprofile.mobile')} placeholder={t('editprofile.peoplePlaceHolder')} keyboardType={'numeric'} />
                <CustomDateTimePicker isDate={true} date={date} onDateChange={SetDate} title={t('editprofile.Date')} />
                < SessionInput title={t('editprofile.year')} placeholder={t('editprofile.locationPlaceHolder')} />
                < SessionInput title={t('editprofile.trainer')} placeholder={t('editprofile.locationPlaceHolder')} />
                <Text allowFontScaling={false} style={styles.title}>{t('profile.professional')}</Text>
                <SessionInput title={t('profile.name')} placeholder={t('profile.sessionPlaceHolder')} />
                <CustomDateTimePicker isDate={true} date={date} onDateChange={SetDate} title={t('profile.dateOfJoining')} />
                <SessionInput title={t('profile.designation')} placeholder={t('profile.sessionPlaceHolder')} />
                <SessionInput title={t('profile.medical')} placeholder={t('profile.sessionPlaceHolder')} />
                <CustomDateTimePicker isDate={true} date={date} onDateChange={SetDate} title={t('profile.tot')} />
                <OptionsListing classesTypes={classesTypes} title={t('profile.ccp')} />
                <CustomButton
                    bgColor={Colors.secondaryColor}
                    titleColor={Colors.white}
                    title={t('editprofile.submit')}
                />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollingContainer: {
        flexGrow: 1,
        padding: WP('5')
    },
    title: {
        color: Colors.secondaryColor,
        fontWeight: 'bold',
        fontSize: WP('3.5'),
        marginTop: WP('5'),
        marginBottom: WP('5')
    },
});

//make this component available to the app
export default EditProfile;
