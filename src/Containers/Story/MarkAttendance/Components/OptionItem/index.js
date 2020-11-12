//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, } from '../../../../../Theme';
import {
    Layout, Fonts, Images, WP
} from '@/Theme'
// create a component
const OptionItem = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}
            >
                {props.classes.isSelected ?
                    <Image
                        style={styles.image}
                        source={Images.unchecked}

                    /> :
                    <Image
                        style={styles.image}
                        source={Images.unchecked}
                    />
                }
            </TouchableOpacity>
            <Text allowFontScaling={false} style={styles.title}>{props.classes.title}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: WP('6'),
    },
    image: {
        height: WP('6'),
        width: WP('6'),
        resizeMode: 'contain'
    },
    title: {
        color: Colors.black,
    }
});

//make this component available to the app
export default OptionItem;
