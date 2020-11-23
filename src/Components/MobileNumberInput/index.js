//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Colors, Images, Layout, WP } from '../../Theme';

// create a component
const MobileNumberInput = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>

                {props.value.length > 0 ?
                    <Text style={styles.prefix}>+91</Text>
                    :
                    null
                }
                <TextInput style={[Layout.inputText, props.value.length > 0 ? styles.input : styles.placer]}  {...props} placeholderTextColor={Colors.black} maxLength={10} />
            </View>
            {props.value.length > 9 ?

                <TouchableOpacity
                    onPress={props.onArrowPress}
                >
                    <Image
                        source={Images.forward}
                        style={styles.accessory}
                    />
                </TouchableOpacity> :
                null
            }

        </View>
    );
};
//make this component available to the app
export default MobileNumberInput;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: WP('13'),
        width: WP('90'),
        borderColor: Colors.appColor,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',

    },
    prefix: {
        paddingHorizontal: 10,
        fontFamily: 'Assistant-Bold',
        color: Colors.grey,
        fontSize: WP('4.5')

    },
    input: {
        fontFamily: 'Assistant-Bold',
        color: Colors.grey,
        fontSize: WP('4.5'),
    },
    placer: {
        fontFamily: 'Assistant-Regular',
        color: Colors.grey,
        fontSize: WP('4.5'),
    },
    accessory: {
        height: WP('5'),
        width: WP('5'),
        resizeMode: 'contain',
        tintColor: Colors.appColor,
    },
    inputContainer: {
        flexDirection: 'row',
        width: WP('70'),
        alignItems: 'center',
        justifyContent: 'center',
    }

});


