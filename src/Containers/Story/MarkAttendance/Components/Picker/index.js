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
        borderWidth: 1,
        borderColor: '#A4A9AD',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: WP('5'),
        height: WP('16'),
        width: WP('90'),
        marginBottom: WP('3'),
        borderStyle: 'dashed',
        borderRadius: 1,
    },
    iconContainer: {
        height: WP('8'),
        width: WP('8'),
        resizeMode: 'contain'
    },
    imageText: {
        color: Colors.grey,
        fontFamily: 'Assistant-SemiBold'
    }
});

//make this component available to the app
export default Picker;
