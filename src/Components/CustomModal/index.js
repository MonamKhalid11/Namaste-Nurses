//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { Colors, Images, WP } from '../../Theme';

// create a component
const CustomModal = (props) => {
    return (
        <View>
            <Modal
                {...props}
            >
                <View style={styles.container}>
                    <View style={styles.closeContainer}>
                        <Text allowFontScaling={false} style={styles.capture}>CAPTURE IMAGE</Text>
                        <TouchableOpacity
                            onPress={props.onClosePress}
                            style={styles.closeBtn}
                        >
                            <Image
                                source={Images.close}
                                style={styles.close}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imagesContainer}>
                        <TouchableOpacity
                            onPress={props.onCameraPress}
                        >
                            <Image
                                source={Images.camera}
                                style={styles.cameraIcons}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={props.onLibraryPress}
                        >
                            <Image
                                source={Images.gallery}
                                style={styles.cameraIcons}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: WP('55'),
        backgroundColor: Colors.white,
        width: WP('72'),
        alignSelf: 'center',
        padding: WP('5')
    },
    capture: {
        color: Colors.grey,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('5')
    },
    close: {
        height: WP('4'),
        width: WP('4'),
        resizeMode: 'contain',
        tintColor: Colors.grey
    },
    closeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: WP('3')
    },
    cameraIcons: {
        height: WP('30'),
        width: WP('28'),
        resizeMode: 'contain'
    },
    closeBtn: {
        height: WP('12'),
        width: WP('12'),
        alignItems: "center",
        justifyContent: "center"
    }
});

//make this component available to the app
export default CustomModal;
