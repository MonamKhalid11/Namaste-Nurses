//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, } from '../../../../../Theme';
import {
    Layout, Fonts, Images, WP
} from '@/Theme'
// create a component
const OptionItem = (props) => {

    useEffect(() => {

    }, [props.classes])
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.onPress(props.classes)}
            >
                {props.classes.isSelected ?
                    <View style={styles.container}>
                        <Image
                            style={[styles.selectedImages, props.isEditProfile ? { tintColor: Colors.secondaryColor } : null]}
                            source={Images.checkedBox}

                        />
                        <Text allowFontScaling={false} style={styles.title}>{props.classes.title}</Text>
                    </View>
                    :
                    <View style={styles.container}>

                        <Image
                            style={styles.image}
                            source={Images.unchecked}
                        />
                        <Text allowFontScaling={false} style={styles.title}>{props.classes.title}</Text>
                    </View>


                }
            </TouchableOpacity>
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
        marginBottom: WP('1')

    },
    image: {
        height: WP('6'),
        width: WP('6'),
        resizeMode: 'contain',
        tintColor: Colors.grey,
        marginRight: 4,
    },
    selectedImages: {
        height: WP('6'),
        width: WP('6'),
        resizeMode: 'contain',
        tintColor: Colors.appColor,
        marginRight: 4,

    },
    title: {
        color: Colors.grey,
        fontFamily: 'Assistant-Regular',
        fontSize: WP('4')

    }
});

//make this component available to the app
export default OptionItem;
