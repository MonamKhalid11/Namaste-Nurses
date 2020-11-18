//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../../../Theme';
import {
    Layout, Fonts, Images, WP
} from '@/Theme'
// create a component
const CourseItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.header}>
                <Text allowFontScaling={false} style={styles.title}>{props.course.title}</Text>
                {/* <Text allowFontScaling={false} style={styles.course}>{props.course.course}</Text> */}
            </View>
            <Image
                source={Images.forward}
                style={styles.drawer}
            />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: Colors.appColor,
        width: WP('90'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header: {
        display: 'flex'
    },
    drawer: {
        height: WP('15'),
        width: WP('5'),
        resizeMode: 'contain',
        tintColor: Colors.appColor
    },
    title: {
        color: Colors.black,
        fontFamily: 'Assistant-Bold'
    },
    course: {
        color: Colors.appColor,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('2.8'),
        marginTop: WP('1')
    }

});

//make this component available to the app
export default CourseItem;
