//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next'
import { Common, Fonts, Gutters, Layout, WP } from '@/Theme'
import { Colors } from '../../../../Theme';

// create a component
const OtpText = () => {
    const { t } = useTranslation()

    return (
        <Text style={[Fonts.textRegular, styles.text]}>{t('login.otpTextOne')}
            <Text style={[Fonts.titleLarge, styles.textTwo]}>{t('login.otpTextTwo')}</Text>
            <Text style={[Fonts.textRegular, styles.text]}>{t('login.otpTextThree')}</Text>

        </Text>
    );
};

// define your styles
const styles = StyleSheet.create({
    text: {
        color: Colors.white,
    },
    textTwo: {
        color: Colors.white,
    }
});

//make this component available to the app
export default OtpText;
