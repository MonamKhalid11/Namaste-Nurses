//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import CuatomCoursesHeaders from '../../../Components/CoursesHeader'
import CustomButton from '../../../Components/CustomButton'
import { useTranslation } from 'react-i18next'
import { Colors, Images, WP } from '../../../Theme';
import PreviousClassesList from './Components/ClassesLisitngs'
import { getFullData } from '../../../Store/actions'
import { useDispatch, useSelector } from 'react-redux'

// create a component
const PreviousClasses = (props) => {
    const { t } = useTranslation()
    const previousClasses = useSelector(state => state.story.classesDetails)
    console.log("showing previous classes in content", previousClasses)
    var msgTotal
    if (previousClasses.length > 0) {
        previousClasses.map((entry) => {
            entry.no_of_people = parseInt(entry.no_of_people)
        })
        msgTotal = previousClasses.reduce(function (prev, cur) {
            return prev + cur.no_of_people;
        }, 0);
        console.warn(msgTotal)
    }

    useEffect(() => {
    }, [previousClasses, msgTotal])
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={Colors.appColor}
            />
            <CuatomCoursesHeaders
                navigation={props.navigation}
                title={t('previousclasses.title')}
                subtitle={t('previousclasses.subtitle')}
                boldSubtitle={t('previousclasses.language')}
                click={t('previousclasses.click')}
                color={Colors.appColor}
                isPreviousClass={true}
                sessions={previousClasses.length}
                patients={msgTotal}
            />
            {previousClasses.length > 0 ?
                <PreviousClassesList classes={previousClasses} onPress={(item) => props.navigation.navigate('EditClassDetails', item)} />
                :
                <View style={styles.noImageContainer}>
                    <Image
                        source={Images.noClass}
                        style={styles.noClass}
                    />
                </View>


            }
            <CustomButton title={t('previousclasses.button')}
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
        backgroundColor: Colors.white
    },
    btnContainer: {
        alignSelf: 'center',
        marginBottom: WP('2'),
        marginTop: WP('2')

    },
    noClass: {
        height: WP('90'),
        width: WP('90'),
        resizeMode: 'contain',
    },
    noImageContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

//make this component available to the app
export default PreviousClasses;
