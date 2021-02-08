//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next'
import { Colors, WP } from '../../../../Theme';

// create a component
const Headings = () => {
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <Text allowFontScaling={false} style={styles.heading}>{t('states.heading')}</Text>
            <Text allowFontScaling={false} style={styles.todo}>{t('states.todo')}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    heading: {
        color: Colors.white,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('7')
    },
    todo: {
        color: Colors.white,
        fontSize: WP('6'),
        fontFamily: 'Assistant-Regular'
    },

});

//make this component available to the app
export default Headings;
