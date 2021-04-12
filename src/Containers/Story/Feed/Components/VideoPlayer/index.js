//import liraries
import React, { Component, useEffect, useState, useFocusEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, SafeAreaView, PermissionsAndroid, Platform, BackHandler } from 'react-native';
import YouTube from 'react-native-youtube';
import getVideoId from 'get-video-id';
import { CustomLayout } from '@/Components'
import { Colors, Images, WP } from '../../../../../Theme'
import { Dimensions, PixelRatio } from 'react-native';
import { YOUTUBEKEY } from '../../../../../Services/constants'
// create a component
import CameraRoll from "@react-native-community/cameraroll";
import { ShowActivityIndicator, showToast } from '../../../../../Services';
import FadeInView from '../../../../../Components/AnimatedView'
import Modal from 'react-native-modal';
import RNFetchBlob from 'rn-fetch-blob';
import { useNavigation } from '@react-navigation/native';

const YoutubeComponent = (props) => {
    const { addListener } = useNavigation();
    const [play, setPlay] = useState(true);

    console.log('props here', props.route.params)
    const [videoId, setVideoId] = useState(null)
    const [showImages, SetShowImages] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    const screenWidth = Dimensions.get('window').width;
    const getPermissionAndroid = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Image Download Permission',
                    message: 'Your permission is required to save images to your device',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            }
            Alert.alert(
                'Save remote Image',
                'Grant Me Permission to save Image',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false },
            );
        } catch (err) {
            Alert.alert(
                'Save remote Image',
                'Failed to save Image: ' + err.message,
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false },
            );
        }
    };

    useEffect(() => {

        if (props.route.params.isVideo) {
            const { id } = getVideoId(props.route.params.url);
            setVideoId(id)
            console.log("showing hereed in effect")
        }
        else {
            SetShowImages(true)
        }

        const unsubsfocus = addListener('focus', () => {
            console.log('focus');
            setPlay(true);
        });
        const unsubsblur = addListener('blur', () => {
            console.log('blur');
            setPlay(true);
        });

        return () => {
            unsubsfocus();
            unsubsblur();
            setPlay(false);
        };

    }, [props.route, addListener,])





    const toggleDrawer = () => props.navigation.toggleDrawer();
    const toggleImageViewer = () => { SetShowImages(!showImages), onBackBtnPressed() };

    const onDeviceBackBtn = () => {
        SetShowImages(false)
        props.navigation.goBack()
    }

    const onBackBtnPressed = () => props.navigation.goBack()



    const tester = () => {
        if (Platform.OS === 'android') {
            handleDownload()
        }
        else {
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

    }
    const handleDownload = async () => {
        // if device is android you have to ensure you have permission
        if (Platform.OS === 'android') {
            const granted = await getPermissionAndroid();
            if (!granted) {
                return;
            }
        }
        setShowLoader(true)

        RNFetchBlob.config({
            fileCache: true,
            appendExt: 'png',
        })
            .fetch('GET', props.route.params.url)
            .then(res => {
                CameraRoll.saveToCameraRoll(res.data, 'photo')
                    .then(() => {
                        Alert.alert(
                            'Image Saved',
                            'Photo added to camera roll!',
                            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                            { cancelable: false },
                        );
                    })
                    .catch(err => {
                        Alert.alert(
                            'Save remote Image',
                            'Failed to save Image: ' + err.message,
                            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                            { cancelable: false },
                        );
                    })
                    .finally(() => setShowLoader(false)
                    );
            })
            .catch(error => {
                setShowLoader(false)
                Alert.alert(
                    'Save remote Image',
                    'Failed to save Image: ' + error.message,
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                    { cancelable: false },
                );
            });
    };

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
                        {videoId && play ?
                            <YouTube
                                apiKey={YOUTUBEKEY}
                                videoId={videoId} // The YouTube video ID
                                play={play}// control playback of video with true/false
                                fullscreen // control whether the video should play in fullscreen or inline
                                style={{ alignSelf: 'stretch', height: 300 }}
                                resumePlayAndroid={false}
                            />
                            :
                            null

                        }

                    </View>

                </View>
                :
                <Modal
                    isVisible={showImages}
                    onBackdropPress={toggleImageViewer}
                    style={styles.containerImage}
                    onRequestClose={onDeviceBackBtn}

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
