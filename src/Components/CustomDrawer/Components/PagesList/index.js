//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, WP } from '../../../../Theme';
import PageItem from '../PageItem'
import { useTranslation } from 'react-i18next'

// create a component
const PagesList = (props) => {
    console.log("showing props", props)
    const { t } = useTranslation()
    return (
        <View style={styles.container} >
            <View style={styles.helloTextContainer}>
                <Text allowFontScaling={false} style={styles.titleText}>{t('drawer.message')}</Text>
            </View>
            {props.pages.map((page) => {
                return (
                    <PageItem page={page} navigation={props.navigation} />
                )
            })}
        </View>
    );
};


//make this component available to the app
const styles = StyleSheet.create({
    container: {
        padding: WP('5'),
    },
    helloTextContainer: {
        display: 'flex',
        borderBottomWidth: WP('0.5'),
        borderColor: Colors.appColor,
        marginBottom: WP('3'),
        paddingBottom: WP('3')
    },
    titleText: {
        fontFamily: 'Assistant-Bold',
        color: Colors.appColor,
        fontSize: WP('8'),
    }
});
export default PagesList;
