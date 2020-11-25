//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, Images, WP } from '../../../../../Theme';

// create a component
const LikeItem = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={props.like.user && props.like.user.profile_image ? { uri: props.like.user.profile_image } : Images.comment}
                style={styles.dp}
            />
            <View style={styles.details}>
                <Text allowFontScaling={false} style={styles.header}>{props.like.user.first_name + ' ' + props.like.user.last_name}</Text>
                <Text allowFontScaling={false} style={styles.location}>{props.like.user.location.state_name}</Text>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: WP('5'),
        alignItems: 'center',
    },
    dp: {
        height: WP('18'),
        width: WP('18'),
        borderRadius: 100,
        resizeMode: 'cover',
    },
    details: {
        marginLeft: WP('2')
    },
    header: {
        fontSize: WP('4'),
        fontWeight: '500'
    },
    location: {
        fontSize: WP('4'),
        fontFamily: 'Assistant-Bold',
        color: Colors.feebackgroundColor,
        marginTop: WP('2')
    }
});

//make this component available to the app
export default LikeItem;
