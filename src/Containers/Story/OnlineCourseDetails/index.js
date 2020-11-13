//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CuatomCoursesHeaders from '../../../Components/CoursesHeader'
import { useTranslation } from 'react-i18next'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
import CoursesList from './Components/CoursesList'
// create a component
const OnlineCoursesDetails = (props) => {
    const { t } = useTranslation()
    const [courses, setCourses] = useState([
        {
            id: Math.random(),
            title: 'Covid 19 : Training of the Trainers',
            course: 'ENGLISH'
        },
        {
            id: Math.random(),
            title: 'Covid 19 : Training of the Trainers',
            course: 'ENGLISH'
        },
    ])
    return (
        <View style={styles.container}>
            <CuatomCoursesHeaders
                navigation={props.navigation}
                title={t('English Courses')}
                subtitle={t('onlineCoursesDetails.subtitle')}
                boldSubtitle={t('onlineCoursesDetails.language')}
                click={t('onlineCoursesDetails.click')}
                isCourseDetails={true}
            />
            <ScrollView contentContainerStyle={styles.scroller}>
                <CoursesList courses={courses} />
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroller: {
        flexGrow: 1,
        alignSelf: 'center',
    },
    btnContainer: {
        marginTop: WP('5')
    }
});

//make this component available to the app
export default OnlineCoursesDetails;
