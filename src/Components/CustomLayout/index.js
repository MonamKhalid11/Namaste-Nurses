//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Common, Fonts, Gutters, Layout, WP, Images } from '@/Theme'
import { Colors } from '../../Theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomTextField from '../CustomInput'
// create a component
const CustomLayout = (props) => {
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={[styles.logoContainer, !props.isLogin ? { alignItems: 'center', justifyContent: 'center' } : null]}>
                {!props.isLogin ? <TouchableOpacity style={styles.drawerContainer}
                    onPress={props.drawerOnPress}
                >
                    <Image
                        source={Images.drawer}
                        style={styles.drawer}
                    />
                </TouchableOpacity> : null}
                <Image
                    source={props.isLogin ? Images.logo : Images.welcome}
                    style={props.isLogin ? styles.logo : styles.welcome}
                />

                {props.isLogin ?
                    <CustomTextField
                        placeholder={props.loginPlaceHolder}
                        isLogin={props.isLogin}
                        keyboardType={'phone-pad'}
                        value={props.value}
                        onChangeText={props.onChangeText}
                    />
                    :
                    null
                }
            </View>
            <View style={styles.contentContainer}>
                {props.children}
            </View>
        </KeyboardAwareScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.white
    },
    logoContainer: {
        flex: 2,
        padding: WP('5'),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentContainer: {
        flex: 1,
        backgroundColor: Colors.appColor,
        padding: WP('5'),
        justifyContent: 'space-evenly'

    },
    logo: {
        height: WP('60'),
        width: WP('60'),
        resizeMode: 'contain',
        marginTop: WP('20')
    },
    welcome: {
        height: WP('90'),
        width: WP('90'),
        resizeMode: 'contain',
    },
    drawer: {
        height: WP('15'),
        width: WP('15'),
        resizeMode: 'contain',
    },
    drawerContainer: {
        alignSelf: 'flex-end',
        marginTop: WP('-20'),
        marginRight: WP('-5'),
    }
});

//make this component available to the app
export default CustomLayout;
