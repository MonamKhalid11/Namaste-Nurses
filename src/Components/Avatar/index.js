//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
            {props.isEdit ?
                <TouchableOpacity onPress={props.onPress}
                    style={styles.imageContainer}
                >
                    <Image
                        source={Images.add}
                        style={styles.add}
                    />
                </TouchableOpacity> :
                null
            }

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    profileContainer: {
        display: 'flex',
        height: WP('30'),
        width: WP('30'),
        borderRadius: 100,
        borderWidth: WP('1'),
        borderColor: Colors.inputGrey,
        position: 'relative'
    },
    profilePic: {
        display: 'flex',
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 100,
        overflow: 'hidden'
    },
    add: {
        height: '100%',
        width: "100%",
        resizeMode: 'contain'
    },
    imageContainer: {
        display: 'flex',
        height: WP('8'),
        width: WP('8'),
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        right: 0,
        tintColor: Colors.secondaryColor
    }
});

//make this component available to the app
export default AvatarContainer;
