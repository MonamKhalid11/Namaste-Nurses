//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import { Colors, WP } from '../../../Theme';
import FeedListing from './Components/FeedList'
import { Layout, Fonts, Images } from '@/Theme'
import { useDispatch, useSelector } from 'react-redux'
import { getNurseFeed } from '../../../Store/actions'
import { ShowActivityIndicator, isOnline, showToast } from '../../../Services';


// create a component
const Feed = (props) => {
    const nurseFeed = useSelector(state => state.story.nurseFeed)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    console.log("showing data  in feeds", nurseFeed)
    useEffect(() => {
        isOnline((connected) => {
            setLoading(true)
            dispatch(getNurseFeed(user.id, setLoading))
        }, (offline) => {
            setLoading(false)
            showToast(t('commonApp.internetError'))
        })
    }, [props.route])

    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.feebackgroundColor}
                screenTitle={user.first_name + ' ' + user.last_name}
                navigation={props.navigation}
            />
            {loading ?
                <View style={styles.loader}>
                    {ShowActivityIndicator()}
                </View>
                :
                <FeedListing
                    navigation={props.navigation}
                    feeds={nurseFeed}
                />
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//make this component available to the app
export default Feed;
