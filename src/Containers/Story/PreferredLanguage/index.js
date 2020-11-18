//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CuatomCoursesHeaders from '../../../Components/CoursesHeader'
import { useTranslation } from 'react-i18next'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
// create a component
const PreferredLanguage = (props) => {
    const { t } = useTranslation()
    const navigateCourse = () => props.navigation.navigate('CcpToolsDetails')

    return (
        <View style={styles.container}>
            <CuatomCoursesHeaders
                navigation={props.navigation}
                title={t('languages.title')}
                subtitle={t('languages.subtitle')}
                boldSubtitle={t('languages.language')}
                click={t('languages.click')}
                color={Colors.appColor}

            />
            <ScrollView contentContainerStyle={styles.scroller}>
                <CustomButton
                    bgColor={Colors.appColor}
                    titleColor={Colors.white}
                    title={t('languages.button1')}
                    containerStyles={styles.btnContainer}
                    onPress={navigateCourse}
                />
                <CustomButton
                    bgColor={Colors.appColor}
                    titleColor={Colors.white}
                    title={t('languages.button2')}
                    containerStyles={styles.btnContainer}
                    onPress={navigateCourse}
                />
                <CustomButton
                    bgColor={Colors.appColor}
                    titleColor={Colors.white}
                    title={t('languages.button3')}
                    containerStyles={styles.btnContainer}
                    onPress={navigateCourse}
                />
                <CustomButton
                    bgColor={Colors.appColor}
                    titleColor={Colors.white}
                    title={t('languages.button4')}
                    containerStyles={styles.btnContainer}
                    onPress={navigateCourse}
                />
                <CustomButton
                    bgColor={Colors.appColor}
                    titleColor={Colors.white}
                    title={t('languages.button5')}
                    containerStyles={styles.btnContainer}
                    onPress={navigateCourse}
                />
                <CustomButton
                    bgColor={Colors.appColor}
                    titleColor={Colors.white}
                    title={t('languages.button6')}
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
        backgroundColor: Colors.white
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
export default PreferredLanguage;
