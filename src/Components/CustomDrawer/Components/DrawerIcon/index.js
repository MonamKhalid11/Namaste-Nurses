//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Common, Fonts, Gutters, Layout, WP, Images } from '@/Theme'

// create a component
const DrawerIcon = (props) => {
    return (
        <TouchableOpacity style={styles.drawerContainer}
            onPress={props.openDrawer}
        >
            <Image
                source={Images.drawer}
                style={styles.drawer}
            />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    drawer: {
        height: WP('15'),
        width: WP('15'),
        resizeMode: 'contain',
    },
    drawerContainer: {
        alignSelf: 'flex-end',
    }
});

//make this component available to the app
export default DrawerIcon;
