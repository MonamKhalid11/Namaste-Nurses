//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Common, Fonts, Gutters, Layout, WP } from '@/Theme'
import { Colors } from '../../Theme';
import Images from '../../Theme/Images'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MobileNumberInput from '../MobileNumberInput'
// create a component
const CustomLayout = (props) => {
    const toggleDrawer = () => props.navigation.toggleDrawer();;
    const onBackBtnPressed = () => props.navigation.goBack()
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            {
                !props.isLogin ?
                    props.showBackbtn ?
                        <View style={styles.drawerContainerDetails}>
                            <TouchableOpacity
                                onPress={onBackBtnPressed}
                            >
                                <Image
                                    source={Images.back}
                                    style={styles.menu}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={toggleDrawer}
                            >
                                <Image
                                    source={Images.menu}
                                    style={styles.menu}
                                />
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.loginContainer}>
                            <TouchableOpacity
                                onPress={props.drawerOnPress}
                            >
                                <Image
                                    source={Images.menu}
                                    style={styles.menuBlack}
                                />
                            </TouchableOpacity>
                        </View>
                    :
                    null

            }
            <View style={[props.showBackbtn ? styles.logoContainerBackBtn : styles.logoContainer, !props.isLogin && !props.showBackbtn ? { alignItems: 'center', justifyContent: 'center' } : null, props.logoStyles]}>
                <Image
                    source={props.isLogin ? Images.logo : props.isMarked ? Images.marked : props.commingSoon ? Images.commingSoon : Images.welcome}
                    style={props.isLogin ? styles.logo : props.isMarked ? styles.marked : styles.welcome}
                />

                {props.isLogin ?
                    <MobileNumberInput
                        placeholder={props.loginPlaceHolder}
                        isLogin={props.isLogin}
                        keyboardType={'phone-pad'}
                        value={props.value}
                        onChangeText={props.onChangeText}
                        onArrowPress={props.onArrowPress}
                    />
                    :
                    null
                }
            </View>
            <View style={[props.isLogin ? styles.contentContainerLogin : styles.contentContainer, props.contentContainer]}>
                {props.children}
            </View>
        </KeyboardAwareScrollView >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    logoContainer: {
        flex: 1.6,
        padding: WP('5'),
        alignItems: 'center',
        justifyContent: 'space-between',
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
    contentContainerLogin:
    {
        flex: 1,
        backgroundColor: Colors.appColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: WP('90'),
        width: WP('90'),
        resizeMode: 'contain',
        // marginTop: WP('12'),
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
    loginMenu: {

    },
    isCourse: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    drawerContainerDetails: {
        display: 'flex',
        height: WP('13'),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: WP('5'),
        paddingLeft: WP('5'),
        backgroundColor: Colors.appColor,
        flexDirection: 'row'
    },
    menu: {
        height: WP('8'),
        width: WP('6.3'),
        tintColor: Colors.white,
        resizeMode: 'contain'
    },
    menuBlack: {
        height: WP('8'),
        width: WP('6.3'),
        tintColor: Colors.grey
    },
    backIcon: {
        height: WP('10'),
        width: WP('5'),
        resizeMode: 'contain',
        tintColor: Colors.grey,
    },
    drawerContainer: {
        display: 'flex',
        height: WP('13'),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: Colors.appColor,
        flexDirection: 'row'
    },
    loginContainer: {
        display: 'flex',
        height: WP('13'),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: WP('5'),
        flexDirection: 'row'
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
