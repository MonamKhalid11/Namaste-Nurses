//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OptionItem from '../OptionItem'
import { Colors, WP } from '../../../../../Theme';

// create a component
const OptionsListing = (props) => {
    useEffect(() => {

    }, [props.classesTypes])
    return (
        <>
            <Text allowFontScaling={false} style={styles.title}>{props.title}
                <Text allowFontScaling={false} style={styles.subtitle}>{props.subTitle}</Text>
            </Text>
            <View style={styles.container}>
                {props.classesTypes.map((type) => {
                    return (
                        <OptionItem classes={type} onPress={(tapped) => { props.onPress(tapped) }} isEditProfile={props.isEditProfle} />
                    )
                })}
            </View >
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        marginBottom: WP('10'),
        height: WP('35'),
        width: WP('90')
    },
    title: {
        color: Colors.grey,
        fontSize: WP('5'),
        marginBottom: WP('3'),
        fontFamily: 'Assistant-Regular'

    },
    subtitle: {
        color: Colors.pickerBorder,
        fontSize: WP('4'),
        marginBottom: WP('3'),
        fontFamily: 'Assistant-Regular'

    },



});

//make this component available to the app
export default OptionsListing;
