//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next'
import { Colors, WP } from '../../../../Theme';
import { Layout, Fonts, Images } from '@/Theme'
import AvatarContainer from '../../../../Components/Avatar'
// create a component
const PersonalDetails = (props) => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <Text allowFontScaling={false} style={styles.title}>{t('profile.personal')}</Text>
            <View style={styles.nameContainer}>
                <Text allowFontScaling={false} style={styles.name}>{props.name}</Text>
                <AvatarContainer />
            </View>
            <Text style={styles.questions}>{t('profile.phone')} : <Text style={styles.details}>{props.phone}</Text></Text>
            <Text style={styles.questions}>{t('profile.date')} : <Text style={styles.details}>{props.date}</Text></Text>
            <Text style={styles.questions}>{t('profile.status')} : <Text style={styles.details}>{props.status}</Text> </Text>
            <Text style={styles.questions}>{t('profile.year')} : <Text style={styles.details}>{props.year}</Text></Text>
            <Text style={styles.questions}>{t('profile.trainer')} : <Text style={styles.details}>{props.trainer}</Text></Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    title: {
        color: Colors.secondaryColor,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('3.5'),
        marginTop: WP('5'),
        // marginBottom: WP('5')
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name: {
        color: Colors.black,
        // fontWeight: '500',
        fontSize: WP('5'),
        fontFamily: 'Assistant-Regular',
        // marginTop: WP('5'),
    },
    profileContainer: {
        display: 'flex',
        height: WP('20'),
        width: WP('20'),
        borderRadius: 100,
        borderWidth: WP('1'),
        borderColor: Colors.white,
        position: 'relative'
    },
    questions: {
        color: Colors.secondaryColor,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('4'),
        marginBottom: WP('2')
    },
    details:
    {
        color: Colors.grey,
        fontSize: WP('4'),
        marginBottom: WP('3'),
        fontFamily: 'Assistant-Bold',

    },
    profilePic: {
        display: 'flex',
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 100,
        overflow: 'hidden'
    },
    add: {
        display: 'flex',
        height: WP('5'),
        width: WP('5'),
        position: 'absolute',
        bottom: 0,
        right: 0
    }
});

//make this component available to the app
export default PersonalDetails;
