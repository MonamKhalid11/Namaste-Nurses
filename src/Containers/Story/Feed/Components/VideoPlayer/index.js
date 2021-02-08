//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import YouTube from 'react-native-youtube';
import getVideoId from 'get-video-id';
import { CustomLayout } from '@/Components'
import { Colors, Images, WP } from '../../../../../Theme'
// create a component
const YoutubeComponent = (props) => {
    console.log('props here', props.route.params)
    const { id } = getVideoId(props.route.params.url);
    const toggleDrawer = () => props.navigation.toggleDrawer();;
    const onBackBtnPressed = () => props.navigation.goBack()

    return (
        <View
            style={styles.container}
        >
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
            <View style={styles.containerVideo}>
                <YouTube
                    videoId={id} // The YouTube video ID
                    play // control playback of video with true/false
                    fullscreen // control whether the video should play in fullscreen or inline
                    loop // control whether the video should loop when ended
                    style={{ alignSelf: 'stretch', height: 300 }}
                />
            </View>
        </View>);
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerVideo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
});

//make this component available to the app
export default YoutubeComponent;
