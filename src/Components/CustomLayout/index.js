//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Common, Fonts, Gutters, Layout, WP, Images } from '@/Theme'
import { Colors } from '../../Theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomTextField from '../CustomInput'
// create a component
const CustomLayout = (props) => {
    const toggleDrawer = () => props.navigation.toggleDrawer();;
    const onBackBtnPressed = () => props.navigation.goBack()
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={[props.showBackbtn ? styles.logoContainerBackBtn : styles.logoContainer, !props.isLogin && !props.showBackbtn ? { alignItems: 'center', justifyContent: 'center' } : null, props.logoStyles]}>
                {!props.isLogin ?
                    props.showBackbtn ?
                        <View style={styles.isCourse}>
                            <TouchableOpacity style={styles.drawerContent}
                                onPress={onBackBtnPressed}
                            >
                                <Image
                                    source={Images.back}
                                    style={styles.menu}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.drawerContainer}
                                onPress={toggleDrawer}
                            >
                                <Image
                                    source={Images.menu}
                                    style={styles.menu}
                                />
                            </TouchableOpacity>
                        </View>
                        :
                        <TouchableOpacity style={styles.drawerContainer}
                            onPress={props.drawerOnPress}
                        >
                            <Image
                                source={props.commingSoon ? Images.menu : Images.drawer}
                                style={props.commingSoon ? styles.menu : styles.drawer}
                            />
                        </TouchableOpacity> : null}
                <Image
                    source={props.isLogin ? Images.logo : props.isMarked ? Images.marked : props.commingSoon ? Images.commingSoon : Images.welcome}
                    style={props.isLogin ? styles.logo : props.isMarked ? styles.marked : styles.welcome}
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
            <View style={[styles.contentContainer, props.contentContainer]}>
                {props.children}
            </View>
        </KeyboardAwareScrollView >
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
    logoContainerBackBtn: {
        flex: 2,
        padding: WP('5'),
        justifyContent: 'space-between',
        paddingBottom: 0
    },
    contentContainer: {
        flex: 1,
        backgroundColor: Colors.appColor,
        padding: WP('5'),
        justifyContent: 'space-evenly'

    },
    logo: {
        height: WP('90'),
        width: WP('90'),
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
    isCourse: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menu: {
        height: WP('10'),
        width: WP('5'),
        resizeMode: 'contain',
        tintColor: Colors.black,
        marginRight: WP('3')
    },
    drawerContainer: {
        alignSelf: 'flex-end',
        marginTop: WP('-20'),
        marginRight: WP('-5'),
    },
    marked: {
        height: WP('90'),
        width: WP('90'),
        resizeMode: 'contain',
    },
    drawerContent: {
        // alignSelf: 'flex-end',
    },
});

//make this component available to the app
export default CustomLayout;
