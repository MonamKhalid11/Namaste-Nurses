//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Images, WP } from '../../../../../Theme';
import moment from 'moment'
// create a component
const ClassesItems = (props) => {
    function tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
            time[3] = ' '
        }
        return time.join('') // return adjusted time or original string
    }

    return (
        <View style={styles.docker}>
            {props.classDetails.isEven ?
                <View style={styles.parent}>
                    <View style={styles.circle} />
                    <View style={styles.dottedBorder} />
                </View>

                :
                <View style={styles.oddParent}>
                    <View style={styles.oddDottedBorder} />
                    <View style={styles.oddCircle} />
                </View>
            }
            <TouchableOpacity style={styles.container}
                onPress={() => props.onPress(props.classDetails)}
            >
                <View style={styles.heading}>
                    <View style={styles.details}>
                        <Text allowFontScaling={false} style={styles.date}>{moment(props.classDetails.class_date).format('DD')}</Text>
                        <Text allowFontScaling={false} style={styles.month}>{moment(props.classDetails.class_date).format('MMMM')}</Text>
                        <View style={styles.border} />
                        <Text allowFontScaling={false} style={styles.day}>{moment(props.classDetails.class_date).format('dddd').toUpperCase()}</Text>
                    </View>
                    <Text allowFontScaling={false} style={styles.time}>{tConvert(props.classDetails.class_time)}</Text>
                    <Image
                        source={Images.right}
                        style={styles.forward}
                    />
                </View>
                <Text allowFontScaling={false} style={styles.course}>{props.classDetails.class_type.name}</Text>
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
        alignItems: 'center',
        marginTop: WP('-1')
    },
    oddParent: {
        display: 'flex',
        alignItems: 'center',
        marginTop: WP('-16')
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
        fontFamily: 'Assistant-Bold',
        width: WP('4'),
    },
    month: {
        color: Colors.grey,
        marginLeft: WP('1'),
        fontFamily: 'Assistant-SemiBold',
        width: WP('16'),

    },
    border: {
        display: 'flex',
        borderWidth: 1,
        borderColor: Colors.appColor,
        height: WP('5'),
        width: 1,
    },
    day: {
        color: Colors.grey,
        fontFamily: 'Assistant-SemiBold',
        width: WP('16'),
        marginLeft: WP('1')
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
        width: WP('15'),
        textAlign: 'center',

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
    oddCircle: {
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
    },
    oddDottedBorder: {
        borderWidth: 1,
        borderColor: Colors.appColor,
        borderStyle: 'dashed',
        borderRadius: 1,
        height: WP('6')
    },
});

//make this component available to the app
export default ClassesItems;
