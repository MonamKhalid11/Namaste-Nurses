//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CuatomCoursesHeaders from '../../../Components/CoursesHeader'
import CustomButton from '../../../Components/CustomButton'
import { useTranslation } from 'react-i18next'
import { Colors, WP } from '../../../Theme';
import PreviousClassesList from './Components/ClassesLisitngs'
// create a component
const PreviousClasses = (props) => {
    const { t } = useTranslation()
    const [classes, setClasses] = useState([
        {
            id: Math.random(),
            date: '06',
            month: 'August',
            day: 'THURSDAY',
            className: 'PNC',
            time: '05.10 PM',
            dated: "06 july 2020"
        },
        {
            id: Math.random(),
            date: '06',
            month: 'August',
            day: 'THURSDAY',
            className: 'PNC',
            time: '05.10 PM',
            dated: "06 july 2020"

        },
        {
            id: Math.random(),
            date: '06',
            month: 'August',
            day: 'THURSDAY',
            className: 'PNC',
            time: '05.10 PM',
            dated: "06 july 2020"

        },
        {
            id: Math.random(),
            date: '06',
            month: 'August',
            day: 'THURSDAY',
            className: 'PNC',
            time: '05.10 PM',
            dated: "06 july 2020"

        },
        {
            id: Math.random(),
            date: '06',
            month: 'August',
            day: 'THURSDAY',
            className: 'PNC',
            time: '05.10 PM',
            dated: "06 july 2020"

        },
        {
            id: Math.random(),
            date: '06',
            month: 'August',
            day: 'THURSDAY',
            className: 'PNC',
            time: '05.10 PM',
            dated: "06 july 2020"

        },
        {
            id: Math.random(),
            date: '06',
            month: 'August',
            day: 'THURSDAY',
            className: 'PNC',
            time: '05.10 PM',
            dated: "06 july 2020"

        },
        {
            id: Math.random(),
            date: '06',
            month: 'August',
            day: 'THURSDAY',
            className: 'PNC',
            time: '05.10 PM',
            dated: "06 july 2020"
        },
    ])
    return (
        <View style={styles.container}>
            <CuatomCoursesHeaders
                navigation={props.navigation}
                title={t('previousclasses.title')}
                subtitle={t('previousclasses.subtitle')}
                boldSubtitle={t('previousclasses.language')}
                click={t('previousclasses.click')}
                color={Colors.appColor}
                isPreviousClass={true}
                sessions={'02'}
                patients={'26'}
            />
            <PreviousClassesList classes={classes} onPress={(item) => props.navigation.navigate('EditClassDetails', item)} />
            <CustomButton title={t('previousclasses.marknew')}
                bgColor={Colors.appColor} titleColor={Colors.white}
                onPress={() => props.navigation.navigate('MarkAttendance')}
                containerStyles={styles.btnContainer}
            />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnContainer: {
        alignSelf: 'center',
        marginBottom: WP('2'),
        marginTop: WP('2')

    }
});

//make this component available to the app
export default PreviousClasses;
