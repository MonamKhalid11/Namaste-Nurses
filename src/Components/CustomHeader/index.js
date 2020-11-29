//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, WP } from '../../Theme';
import { Images } from '@/Theme'
// create a component
const CustomHeader = (props) => {
    console.log('showing props', props)
    const onBackBtnPressed = () => props.navigation.goBack()
    const toggleDrawer = () => props.navigation.toggleDrawer();;

    return (
        <View style={[styles.container, props.headerColor ? { backgroundColor: props.headerColor } : null]}>
            <TouchableOpacity onPress={onBackBtnPressed}>
                <Image
                    source={Images.back}
                    style={styles.drawer}
                />
            </TouchableOpacity>
            <Text allowFontScaling={false} style={styles.label}>{props.screenTitle}</Text>
            <TouchableOpacity onPress={toggleDrawer}>
                <Image
                    source={Images.menu}
                    style={styles.drawer}
                />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: WP('13'),
        width: '100%',
        backgroundColor: Colors.appColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: WP('5'),
        paddingRight: WP('5'),
        flexDirection: 'row'
    },
    drawer: {
        height: WP('5'),
        width: WP('5'),
        resizeMode: 'contain',
    },
    label: {
        color: Colors.white,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('5')
    }
});

//make this component available to the app
export default CustomHeader;
