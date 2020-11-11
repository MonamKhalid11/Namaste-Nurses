//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Colors, WP } from '../../../../Theme';

// create a component
const OtpInput = () => {
    return (
        <View style={styles.container}>
            <OTPInputView
                style={{ width: WP('30') }}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad={false}
                codeInputFieldStyle={styles.underlineStyleBase}
                onCodeFilled={(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: WP('13'),
        width: WP('90'),
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: Colors.appColor,
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: WP('4')
    },

    underlineStyleHighLighted: {
        borderColor: Colors.appColor,
    },
});

//make this component available to the app
export default OtpInput;
