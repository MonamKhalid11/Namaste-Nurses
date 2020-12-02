//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import CuatomCoursesHeaders from '../../../Components/CoursesHeader'
import { useTranslation } from 'react-i18next'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
import CoursesList from './Components/CoursesList'
import { useDispatch, useSelector } from 'react-redux'
import FocusAwareStatusBar from '../../../Components/FoucsAwareStatusBar'

// create a component
const OnlineCoursesDetails = (props) => {
    const { t } = useTranslation()
    const { params } = props.route
    console.log('showing params', params)
    const courses = useSelector(state => state.story.coursesLists)
    const [coursesFiltered, setCoursesFiltered] = useState([])
    useEffect(() => {
        try {
            if (params.course.match('All')) {
                setCoursesFiltered(courses)
            }
            else {
                let coursesArray = []

                courses.map((course) => {
                    if (course.language.toLowerCase().match(params.course.toLowerCase())) {
                        if (course) {
                            coursesArray.push(course)
                        }
                    }
                })
                setCoursesFiltered(coursesArray)
            }
        }
        catch (error) {

        }
    }, [params.course])

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar
                backgroundColor={Colors.coursesColor}
            />
            <CuatomCoursesHeaders
                navigation={props.navigation}
                title={params.course + " " + "Courses"}
                subtitle={t('onlineCoursesDetails.subtitle')}
                boldSubtitle={t('onlineCoursesDetails.language')}
                click={t('onlineCoursesDetails.click')}
                isCourseDetails={true}
                color={Colors.coursesColor}

            />
            <ScrollView contentContainerStyle={styles.scroller}>
                <CoursesList courses={coursesFiltered} />
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
