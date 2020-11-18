//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next'
import { Colors, WP } from '../../../../Theme';

// create a component
const ProfessionalDetails = (props) => {
    const { t } = useTranslation()
    placeholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUz5EWKDu-QHOR3ym0eWBSQenc69_kODInRA&usqp=CAU'
    return (
        <View style={styles.container}>
            <Text allowFontScaling={false} style={styles.title}>{t('profile.professional')}</Text>
            <Text style={styles.questions}>{t('profile.location')} : <Text style={styles.details}>{props.location}</Text></Text>
            <Text style={styles.questions}>{t('profile.name')} : <Text style={styles.details}>{props.name}</Text></Text>
            <Text style={styles.questions}>{t('profile.dateOfJoining')} : <Text style={styles.details}>{props.dateOfJoining}</Text> </Text>
            <Text style={styles.questions}>{t('profile.designation')} : <Text style={styles.details}>{props.designation}</Text></Text>
            <Text style={styles.questions}>{t('profile.medical')} : <Text style={styles.details}>{props.medical}</Text></Text>
            <Text style={styles.questions}>{t('profile.tot')} : <Text style={styles.details}>{props.tot}</Text></Text>
            <Text style={styles.questions}>{t('profile.ccp')} : <Text style={styles.details}>{props.ccp}</Text></Text>
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
        marginBottom: WP('5')
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
        borderWidth: 1,
        borderColor: Colors.pickerBorder,
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
    }
});

//make this component available to the app
export default ProfessionalDetails;
