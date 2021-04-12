//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    Layout, Fonts, Images, WP
} from '@/Theme'
import { useTranslation } from 'react-i18next'
import { Colors } from '../../../../../Theme';

// create a component
const Picker = (props) => {
    const { t } = useTranslation()

    return (
        <TouchableOpacity style={[styles.container]}
            onPress={props.onPress}
        >
            <Image
                source={props.selectedImage ? { uri: props.selectedImage.uri } : Images.picker}
                style={styles.iconContainer}
            />
            <Text allowFontScaling={false} style={styles.imageText}>{t('markScreen.uploadText')}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        borderWidth: 2.5,
        borderColor: '#A4A9AD',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: WP('5'),
        height: WP('16'),
        width: WP('90'),
        marginBottom: WP('3'),
        borderStyle: 'dotted',
        borderRadius: 1,
    },
    iconContainer: {
        height: WP('15'),
        width: WP('15'),
        resizeMode: 'contain'
    },
    imageText: {
        color: Colors.grey,
        fontFamily: 'Assistant-Regular',
        fontSize: WP('5.5')
    }
});

//make this component available to the app
export default Picker;
