//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Images, WP } from '../../../../../Theme';

// create a component
const ClassesItems = (props) => {
    return (
        <View style={styles.docker}>
            <View style={styles.parent}>
                <View style={styles.circle} />
                <View style={styles.dottedBorder} />
                <View style={styles.circle} />
            </View>
            <TouchableOpacity style={styles.container}
                onPress={() => props.onPress(props.classDetails)}
            >
                <View style={styles.heading}>
                    <View style={styles.details}>
                        <Text allowFontScaling={false} style={styles.date}>{props.classDetails.date}</Text>
                        <Text allowFontScaling={false} style={styles.month}>{props.classDetails.month}</Text>
                        <View style={styles.border} />
                        <Text allowFontScaling={false} style={styles.day}>{props.classDetails.day}</Text>
                    </View>
                    <Text allowFontScaling={false} style={styles.time}>{props.classDetails.time}</Text>
                    <Image
                        source={Images.right}
                        style={styles.forward}
                    />
                </View>
                <Text allowFontScaling={false} style={styles.course}>{props.classDetails.className}</Text>
            </TouchableOpacity >
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    docker: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    parent: {
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        borderBottomWidth: 1,
        borderColor: Colors.appColor,
        paddingBottom: WP('2'),
        marginBottom: WP('5'),
    },
    heading: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    date: {
        color: Colors.black,
        fontFamily: 'Assistant-Bold'
    },
    month: {
        color: Colors.grey,
        marginLeft: WP('1'),
        fontFamily: 'Assistant-SemiBold'
    },
    border: {
        display: 'flex',
        borderWidth: 1,
        borderColor: Colors.appColor,
        height: WP('5'),
        width: 1,
        marginLeft: WP('2'),
        marginRight: WP('2')
    },
    day: {
        color: Colors.grey,
        fontFamily: 'Assistant-SemiBold'

    },
    forward: {
        height: WP('4'),
        width: WP('4'),
        resizeMode: 'contain',
        tintColor: Colors.appColor,
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        width: WP('65')
    },
    time: {
        color: Colors.appColor,
        fontFamily: 'Assistant-Bold',
        marginRight: WP('2')
    },
    course: {
        color: Colors.appColor,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('3'),
    },
    circle: {
        display: 'flex',
        borderRadius: 100,
        borderColor: Colors.appColor,
        borderWidth: 1,
        height: WP('2'),
        width: WP('2')
    },
    dottedBorder: {
        borderWidth: 1,
        borderColor: Colors.appColor,
        borderStyle: 'dashed',
        borderRadius: 1,
        height: WP('10')
    }
});

//make this component available to the app
export default ClassesItems;
