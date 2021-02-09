//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Animated } from 'react-native';
import { CustomLayout, CustomButton, CustomDropDown } from '@/Components'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Headings from './Components'
import { UpdateDeviceTokenDetails } from '../../../Store/actions'
import { deviceInformation } from '../../../Services/index'
import { Images } from '../../../Theme';
import { showToast } from '../../../Services'
import { CommonActions } from '@react-navigation/native'
import FadeInView from '../../../Components/AnimatedView'
// create a component

const Home = (props) => {
    console.log("showing props here", props)
    const { navigation } = props
    const { t } = useTranslation()
    const user = useSelector(state => state.auth.user)
    const [value, setValue] = useState('item1');
    const [showScreen, setShowScreen] = useState(false)
    const [showScreenUrl, setShowScreenUrl] = useState(false)
    const renderScreens = () => {
        if (value) {
            switch (value) {
                case 'item1':
                    setShowScreen(true)
                    setShowScreenUrl(Images.madhaya)
                    setTimeout(() => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'Main' }],
                            }),
                        )
                    }, 3000)
                    break;
                case 'item2':
                    setShowScreen(true)
                    setShowScreenUrl(Images.punjab)
                    setTimeout(() => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'Main' }],
                            }),
                        )
                    }, 3000)
                    break;
                case 'item3':
                    setShowScreen(true)
                    setShowScreenUrl(Images.mahrashtra)
                    setTimeout(() => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'Main' }],
                            }),
                        )
                    }, 3000)

                    break;
                case 'item4':
                    setShowScreen(true)
                    setShowScreenUrl(Images.karnatak)
                    setTimeout(() => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'Main' }],
                            }),
                        )
                    }, 3000)
                    break;
                default:
                    break;
            }
        }
        else {
            showToast('Please select state to continue!')
        }
    }
    return (
        <>
            {showScreen ?
                <FadeInView style={styles.container}>
                    <Image
                        source={showScreenUrl}
                        style={styles.Image}
                    />
                </FadeInView>

                :
                <CustomLayout
                    isWelcome={true}
                >
                    <Headings />
                    <CustomDropDown
                        value={value}
                        setValue={(selectedState) => setValue(selectedState)}
                    />
                    <CustomButton
                        title={t('states.button2')}
                        onPress={renderScreens}
                    />
                </CustomLayout>

            }
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Image: {
        flex: 1,
        height: "100%",
        width: "100%",
    }
});
//make this component available to the app
export default Home;
