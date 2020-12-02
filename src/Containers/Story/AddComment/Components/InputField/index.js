//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Colors, WP } from '../../../../../Theme';
import { useTranslation } from 'react-i18next'

// create a component
const CommentInputBox = (props) => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <View style={styles.postingContainer}>
                <TextInput
                    {...props}
                    style={styles.input}
                    placeholderTextColor={Colors.pickerBorder}
                />
                <TouchableOpacity onPress={props.onPress}>
                    <Text allowFontScaling={false} style={styles.post}>{t('addComment.post')}</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: Colors.inputGrey,
        height: WP('25'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    postingContainer: {
        display: 'flex',
        height: WP('15'),
        width: WP('90'),
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    input: {
        width: WP('70'),
        paddingRight: WP('5'),
        color: Colors.grey,
        fontFamily: "Assistant-Regular"


    },
    post: {
        color: Colors.feebackgroundColor,
        fontFamily: 'Assistant-Bold'
    }
});

//make this component available to the app
export default CommentInputBox;
