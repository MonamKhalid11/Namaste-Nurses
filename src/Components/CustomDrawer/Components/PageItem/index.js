//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, WP } from '../../../../Theme';
import { useTranslation } from 'react-i18next'

// create a component

const PageItem = (props) => {
    const { t } = useTranslation()

    const navigate = (page) => {
        switch (page.title) {
            case t('drawer.screen1'):
                break;
            case t('drawer.screen2'):

                break;
            case t('drawer.screen3'):
                break;
            case t('drawer.screen4'):
                break;
            case t('drawer.screen4'):
                break;
            default:
                break;
        }
    }

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => navigate(props.page)}
        >
            <Text style={styles.titleText}>{props.page.title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        borderBottomWidth: 1,
        borderColor: Colors.appColor,
        marginBottom: WP('5'),
        paddingBottom: WP('5')
    },
    titleText: {
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default PageItem;
