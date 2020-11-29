//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Common, Fonts, Gutters, Layout, WP, Images } from '@/Theme'
import { Colors } from '../../../../Theme';

// create a component
const DrawerIcon = (props) => {
    return (
        <TouchableOpacity style={styles.drawerContainer}
            onPress={props.openDrawer}
        >
            <Image
                source={Images.menu}
                style={styles.drawer}
            />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    drawer: {
        height: WP('5'),
        width: WP('5'),
        tintColor: Colors.grey,
        resizeMode: 'contain',
    },
    drawerContainer: {
        display: 'flex',
        height: WP('13'),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingRight: WP('5'),
        paddingBottom: WP('2')

    }
});

//make this component available to the app
export default DrawerIcon;
