//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, WP } from '../../../../Theme';
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNurseProfile, getNurseFeed } from '../../../../Store/actions'
import { isOnline, ShowActivityIndicator, showToast } from '../../../../Services'
// create a component

const PageItem = (props) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const [loader, setLoader] = useState(false)
    console.log('showing props', props)

    const navigater = (page) => {
        switch (page.title) {
            case t('drawer.screen1'):
                isOnline((connected) => {
                    dispatch(fetchNurseProfile(user.id))
                }, (offline) => {
                    showToast(t('commonApp.internetError'))
                })
                break;
            case t('drawer.screen2'):
                props.navigation.navigate('MarkAttendance')
                break;
            case t('drawer.screen3'):
                isOnline((connected) => {
                    setLoader(true)
                    dispatch(getNurseFeed(user.id, setLoader))
                }, (offline) => {
                    setLoader(false)
                    showToast(t('commonApp.internetError'))
                })
                break;
            case t('drawer.screen4'):
                props.navigation.navigate('PreviousClasses')
                break;
            case t('drawer.screen5'):
                props.navigation.navigate('OnlineCourses')
                break;
            case t('drawer.screen6'):
                props.navigation.navigate('CcpTools')
                break;
            case t('drawer.screen7'):
                props.navigation.navigate('Games')
                break;
            default:
                break;
        }
    }

    return (
        <>
            {loader ?
                <View style={styles.container}
                >
                    {ShowActivityIndicator()}
                </View>

                :
                <TouchableOpacity style={styles.container}
                    onPress={() => navigater(props.page)}
                >
                    <Text style={styles.titleText}>{props.page.title}</Text>
                </TouchableOpacity>
            }
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        borderBottomWidth: WP('0.5'),
        borderColor: Colors.appColor,
        marginBottom: WP('3'),
        paddingBottom: WP('3')
    },
    titleText: {
        color: Colors.grey,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('4')
    }
});

//make this component available to the app
export default PageItem;
