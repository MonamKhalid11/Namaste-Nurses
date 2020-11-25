//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { Colors } from '../../../../../Theme';
import {
    Layout, Fonts, Images, WP
} from '@/Theme'
// create a component
const CourseItem = (props) => {
    const openCoursesDetails = (links) => {
        try {
            Linking.openURL(links)

        } catch (error) {

        }
    }
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => { openCoursesDetails(props.course.training_url) }}
        >
            <View style={styles.header}>
                <Text allowFontScaling={false} style={styles.title}>{props.course.name}</Text>
                <Text allowFontScaling={false} style={styles.course}>{props.course.language}</Text>
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
        borderColor: Colors.coursesColor,
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
    },
    title: {
        color: Colors.black,
        fontFamily: 'Assistant-Bold'
    },
    course: {
        color: Colors.coursesColor,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('2.8'),
        marginTop: WP('1')
    }

});

//make this component available to the app
export default CourseItem;
