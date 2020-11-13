//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, WP } from '../../Theme';
import { Layout, Fonts, Images } from '@/Theme'
// create a component
const AvatarContainer = (props) => {
    placeholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUz5EWKDu-QHOR3ym0eWBSQenc69_kODInRA&usqp=CAU'
    return (
        <View style={[styles.profileContainer, props.isEdit ? { alignSelf: 'center' } : null]}>
            <Image
                source={{ uri: props.profilePicture ? props.profilePicture : placeholder }}
                style={styles.profilePic}
            />
            <Image
                source={Images.add}
                style={styles.add}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    profileContainer: {
        display: 'flex',
        height: WP('20'),
        width: WP('20'),
        borderRadius: 100,
        borderWidth: WP('1'),
        borderColor: Colors.white,
        position: 'relative'
    },
    profilePic: {
        display: 'flex',
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 100,
        overflow: 'hidden'
    },
    add: {
        display: 'flex',
        height: WP('5'),
        width: WP('5'),
        position: 'absolute',
        bottom: 0,
        right: 0
    }
});

//make this component available to the app
export default AvatarContainer;
