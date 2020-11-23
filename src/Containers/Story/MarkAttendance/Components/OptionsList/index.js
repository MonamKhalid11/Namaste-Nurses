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
                        <OptionItem classes={type} onPress={(tapped) => { props.onPress(tapped) }} />
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
        fontSize: WP('3'),
        marginBottom: WP('3')
    },
    subtitle: {
        color: Colors.pickerBorder,
        fontSize: WP('3'),
        marginBottom: WP('3'),
    },



});

//make this component available to the app
export default OptionsListing;
