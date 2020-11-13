//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CuatomCoursesHeaders from '../../../Components/CoursesHeader'
import { useTranslation } from 'react-i18next'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
// create a component
const OnlineCourses = (props) => {
    const { t } = useTranslation()
    const navigateCourse = () => props.navigation.navigate('OnlineCoursesDetails')

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
                    onPress={navigateCourse}
                />
                <CustomButton
                    bgColor={Colors.coursesColor}
                    titleColor={Colors.white}
                    title={t('onlineCourses.button2')}
                    containerStyles={styles.btnContainer}
                    onPress={navigateCourse}
                />
                <CustomButton
                    bgColor={Colors.coursesColor}
                    titleColor={Colors.white}
                    title={t('onlineCourses.button3')}
                    containerStyles={styles.btnContainer}
                    onPress={navigateCourse}
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
    scroller: {
        flexGrow: 1,
        alignSelf: 'center',
    },
    btnContainer: {
        marginTop: WP('5')
    }
});

//make this component available to the app
export default OnlineCourses;
