//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, SafeAreaView } from 'react-native';
import YouTube from 'react-native-youtube';
import getVideoId from 'get-video-id';
import { CustomLayout } from '@/Components'
import { Colors, Images, WP } from '../../../../../Theme'
import { Dimensions, PixelRatio } from 'react-native';

// create a component
import CameraRoll from "@react-native-community/cameraroll";
import { ShowActivityIndicator, showToast } from '../../../../../Services';
import FadeInView from '../../../../../Components/AnimatedView'
import Modal from 'react-native-modal';

const YoutubeComponent = (props) => {
    console.log('props here', props.route.params)
    const [videoId, setVideoId] = useState(null)
    const [showImages, SetShowImages] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    const screenWidth = Dimensions.get('window').width;

    useEffect(() => {
        if (props.route.params.isVideo) {
            const { id } = getVideoId(props.route.params.url);
            setVideoId(id)
        }
        else {
            SetShowImages(true)
        }
    }, [props.route.params])

    const toggleDrawer = () => props.navigation.toggleDrawer();
    const toggleImageViewer = () => { SetShowImages(!showImages), onBackBtnPressed() };

    const onBackBtnPressed = () => props.navigation.goBack()



    const tester = () => {
        setShowLoader(true)
        setTimeout(() => {
            try {
                CameraRoll.save(props.route.params.url, "photo").then(showToast('Photo added to camera roll!'))
                setShowLoader(false)

            } catch (error) {
                setShowLoader(false)
            }
        }, 2000)
    }

    return (
        <>
            {props.route.params.isVideo ?
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
                            videoId={videoId} // The YouTube video ID
                            play // control playback of video with true/false
                            fullscreen // control whether the video should play in fullscreen or inline
                            loop // control whether the video should loop when ended
                            style={{ alignSelf: 'stretch', height: 300 }}
                        />
                    </View>

                </View>
                :
                <Modal
                    isVisible={showImages}
                    onBackdropPress={toggleImageViewer}
                    style={styles.containerImage}
                >
                    <View style={styles.drawerContainerDetailsModal}>
                        <TouchableOpacity
                            onPress={toggleImageViewer}
                        >
                            <Image
                                source={Images.back}
                                style={styles.menu}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={tester}

                        >
                            {showLoader ?
                                ShowActivityIndicator("white")
                                :
                                <Image
                                    source={Images.download}
                                    style={styles.menu}
                                />
                            }

                        </TouchableOpacity>
                    </View>
                    <FadeInView >
                        <Image
                            source={{ uri: props.route.params.url }}
                            style={styles.imageViewer}
                        />
                    </FadeInView>

                </Modal>

            }
        </>



    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    downloadContainer: {
        flex: 1,
        zIndex: 5000,
    },
    containerVideo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImage: {
        backgroundColor: 'black',
        margin: 0, // This is the important style you need to set
        alignItems: undefined,
        justifyContent: undefined,
        // This is the important style you need to set

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
        flexDirection: 'row',
    },
    drawerContainerDetailsModal: {
        display: 'flex',
        height: WP('13'),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: WP('5'),
        paddingLeft: WP('5'),
        flexDirection: 'row',
        marginTop: WP('10')
    },
    menu: {
        height: WP('8'),
        width: WP('6.3'),
        tintColor: Colors.white,
        resizeMode: 'contain'
    },

    imageViewer: {
        display: "flex",
        height: WP('100'),
        width: WP('100'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: WP('40'),
        resizeMode: 'contain'

    }
});

//make this component available to the app
export default YoutubeComponent;
