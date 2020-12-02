//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { Colors } from '../../../../../Theme';
import {
    Layout, Fonts, Images, WP
} from '@/Theme'
import { showToast } from '../../../../../Services';
// create a component
const CourseItem = (props) => {
    const openCoursesDetails = (links) => {

        try {
            if (links) {
                Linking.openURL(links)
            }
            else {
                showToast('No link found')
            }

        } catch (error) {
            console.log("showing error", error)
        }
    }
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => { openCoursesDetails(props.course.url) }}

        >
            <View style={styles.header}>
                <Text allowFontScaling={false} style={styles.title}>{props.course.name}</Text>
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
        color: Colors.grey,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('5')
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
