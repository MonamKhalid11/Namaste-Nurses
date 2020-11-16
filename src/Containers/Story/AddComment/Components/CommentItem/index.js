//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, Images, WP } from '../../../../../Theme';

// create a component
const CommentItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={Images.comment}
                    style={styles.dp}
                />
                <View style={styles.headingContainer}>
                    <Text allowFontScaling={false} style={styles.title}>{props.comment.name}</Text>
                    <Text allowFontScaling={false} style={styles.posted}>{props.comment.posted}</Text>
                </View>
            </View>
            <Text allowFontScaling={false} style={styles.comment}>{props.comment.comment}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: WP('5')
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    dp: {
        height: WP('13'),
        width: WP('13'),
        resizeMode: 'contain'
    },
    title: {
        fontSize: WP('4'),
        fontWeight: 'bold',
        color: Colors.black
    },
    posted: {
        color: Colors.inputGrey,
        fontWeight: 'bold'
    },
    headingContainer: {
        width: WP('78'),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    comment: {
        paddingLeft: WP('13'),
        color: Colors.grey
    }
});

//make this component available to the app
export default CommentItem;
