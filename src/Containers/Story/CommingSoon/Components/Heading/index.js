//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next'
import { Layout, Fonts } from '@/Theme'
import { Colors, WP } from '../../../../../Theme';

// create a component
const Headings = () => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text allowFontScaling={false} style={styles.todo}>{t('commingsoon.heading')} <Text allowFontScaling={false} style={styles.heading}>{t('commingsoon.been')}</Text> <Text allowFontScaling={false} style={styles.todo}>{t('commingsoon.here')} </Text></Text>

        </View >
    );
};

// define your styles
const styles = StyleSheet.create({
    heading: {
        color: Colors.appColor,
        fontWeight: 'bold',
        fontSize: WP('5')
    },
    todo: {
        color: Colors.appColor,
        fontSize: WP('5')
    },

});

//make this component available to the app
export default Headings;
