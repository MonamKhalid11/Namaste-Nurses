//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import CuatomCoursesHeaders from '../../../Components/CoursesHeader'
import { useTranslation } from 'react-i18next'
import CustomButton from '../../../Components/CustomButton'
import { Colors, WP } from '../../../Theme';
import FocusAwareStatusBar from '../../../Components/FoucsAwareStatusBar'

// create a component
const Games = (props) => {
    const { t } = useTranslation()
    const navigateCourse = () => props.navigation.navigate('CommingSoon')

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar
                backgroundColor={Colors.feebackgroundColor}
            />
            <CuatomCoursesHeaders
                navigation={props.navigation}
                title={t('games.title')}
                subtitle={t('games.subtitle')}
                boldSubtitle={t('games.language')}
                click={t('games.click')}
                color={Colors.feebackgroundColor}
            />
            <ScrollView contentContainerStyle={styles.scroller}>
                <CustomButton
                    bgColor={Colors.feebackgroundColor}
                    titleColor={Colors.white}
                    title={t('games.button1')}
                    containerStyles={styles.btnContainer}
                    onPress={navigateCourse}
                />
                <CustomButton
                    bgColor={Colors.feebackgroundColor}
                    titleColor={Colors.white}
                    title={t('games.button2')}
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
export default Games;
