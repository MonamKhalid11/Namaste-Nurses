//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Colors, Layout, WP } from '../../Theme';

// create a component
const CustomTextField = (props) => {
    return (
        <View style={[Layout.inputContainer, props.containerStyles]}>
            <TextInput style={Layout.inputText}  {...props} placeholderTextColor={Colors.black} />
        </View>
    );
};
//make this component available to the app
export default CustomTextField;
