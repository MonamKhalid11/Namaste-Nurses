//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Layout } from '../../Theme';

// create a component
const CustomButton = (props) => {
    return (
        <TouchableOpacity style={[Layout.buttonContainer, props.bgColor ? { backgroundColor: props.bgColor } : null]}
            onPress={props.onPress}
        >
            <Text style={[Layout.btnText, props.titleColor ? { color: props.titleColor } : null]} allowFontScaling={false}>{props.title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default CustomButton;
