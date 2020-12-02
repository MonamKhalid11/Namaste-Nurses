//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, WP } from '../../../../../Theme';
import { Layout, Fonts, Images } from '@/Theme'
import TimeAgo from 'react-native-timeago';

// create a component
const FeedHeader = (props) => {
    return (
        <View style={styles.nameProfileContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={props.feed.user ? { uri: props.feed.user.profile_image } : Images.noora}
                    style={styles.dp}
                />
            </View>
            <View style={styles.headingContainer}>
                <Text allowFontScaling={false} style={styles.title}>{props.feed.title}</Text>
                <TimeAgo allowFontScaling={false} style={styles.posted} time={props.feed.entry_time} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    nameProfileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    imageContainer: {
        height: WP('15'),
        width: WP('15'),
        borderRadius: 100,
        borderWidth: WP('1'),
        borderColor: Colors.white,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dp: {
        height: WP('13'),
        width: WP('13'),
        borderRadius: 100,
        resizeMode: 'contain'
    },
    headingContainer: {
        display: 'flex',
        marginLeft: WP('2')
    },
    title: {
        color: Colors.black,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('4'),
        marginBottom: WP('1'),
    },
    posted: {
        color: Colors.pickerBorder,
        fontSize: WP('2.5'),
        fontFamily: "Assistant-Regular"

    },
});

//make this component available to the app
export default FeedHeader;
