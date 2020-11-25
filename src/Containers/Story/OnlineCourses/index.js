//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CuatomCoursesHeaders from '../../../Components/CoursesHeader'
import { useTranslation } from 'react-i18next'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
import { useDispatch, useSelector } from 'react-redux'
import { fetchOnlineCourses } from '../../../Store/actions'
import { ShowActivityIndicator } from '../../../Services';
// create a component
const OnlineCourses = (props) => {
    const { t } = useTranslation()
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [courses, setCourses] = useState([])
    useEffect(() => {
        dispatch(fetchOnlineCourses(user.id))
    }, [])
    const navigateCourse = (option) => {
        props.navigation.navigate('OnlineCoursesDetails', { course: option })
    }

    return (
        <View style={styles.container}>
            <CuatomCoursesHeaders
                navigation={props.navigation}
                title={t('onlineCourses.title')}
                subtitle={t('onlineCourses.subtitle')}
                boldSubtitle={t('onlineCourses.language')}
                click={t('onlineCourses.click')}
            />
            <ScrollView contentContainerStyle={styles.scroller}>
                <CustomButton
                    bgColor={Colors.coursesColor}
                    titleColor={Colors.white}
                    title={t('onlineCourses.button1')}
                    containerStyles={styles.btnContainer}
                    onPress={() => { navigateCourse('All') }}
                    textStyles={styles.allCourses}
                />
                <CustomButton
                    bgColor={Colors.coursesColor}
                    titleColor={Colors.white}
                    title={t('onlineCourses.button2')}
                    containerStyles={styles.btnContainer}
                    onPress={() => { navigateCourse('English') }}
                    textStyles={styles.english}
                />
                <CustomButton
                    bgColor={Colors.coursesColor}
                    titleColor={Colors.white}
                    title={t('onlineCourses.button3')}
                    containerStyles={styles.btnContainer}
                    onPress={() => { navigateCourse('Hindi') }}
                    textStyles={styles.english}
                />


            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    scroller: {
        flexGrow: 1,
        alignSelf: 'center',
    },
    btnContainer: {
        marginTop: WP('5')
    },
    allCourses: {
        fontFamily: 'Assistant-ExtraBold',
        fontSize: WP('4'),
        color: Colors.white
    },
    english: {
        fontFamily: 'Assistant-SemiBold',
        fontSize: WP('4'),
        color: Colors.white
    }
});

//make this component available to the app
export default OnlineCourses;
