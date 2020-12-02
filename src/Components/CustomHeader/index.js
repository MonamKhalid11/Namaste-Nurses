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
            {props.isProfile ?
                <Text allowFontScaling={false} style={styles.hi}>Hi <Text allowFontScaling={false} style={styles.name}>{props.screenTitle}!</Text>
                </Text>

                :
                <Text allowFontScaling={false} style={styles.label}>{props.screenTitle}</Text>

            }
            <TouchableOpacity onPress={toggleDrawer}>
                <Image
                    source={Images.menu}
                    style={styles.menuIcon}
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
        height: WP('6'),
        width: WP('6'),
        tintColor: Colors.white,
        resizeMode: 'contain',
    },
    menuIcon: {
        height: WP('8'),
        width: WP('6.3'),
        tintColor: Colors.white,
    },
    label: {
        color: Colors.white,
        fontFamily: 'Assistant-Regular',
        fontSize: WP('6')
    },
    name: {
        color: Colors.white,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('6')
    },
    hi: {
        color: Colors.white,
        fontFamily: 'Assistant-Regular',
        fontSize: WP('6'),
    }
});

//make this component available to the app
export default CustomHeader;
