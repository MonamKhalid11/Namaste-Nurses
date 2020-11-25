//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors, WP } from '../../../Theme';
import CustomHeader from '../../../Components/CustomHeader'
import LikesListing from './Components/LikesListings'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNurseLikes } from '../../../Store/actions'
import { ShowActivityIndicator } from '../../../Services';
// create a component
const Likes = ({ route, navigation }) => {
    const { params } = route
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [likes, setLikes] = useState([])
    useEffect(() => {
        setLoading(true)
        setLikes([])
        dispatch(fetchNurseLikes(user.id, params.id, (likes) => { setLoading(false), setLikes(likes) }, () => { setLoading(false) }))
    }, [params])
    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.feebackgroundColor}
                screenTitle={'View Likes'}
                navigation={navigation}
            />
            {loading ?
                <View style={styles.loader}>
                    {ShowActivityIndicator()}
                </View>
                :
                likes.length > 0 ?
                    <LikesListing
                        likes={likes}
                    />
                    :
                    <View style={styles.loader}>
                        <Text style={styles.noComment}>No Likes Found</Text>
                    </View>

            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    noComment: {
        color: Colors.appColor,
        alignSelf: 'center',
        fontSize: WP('5')
    },
    noCommentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loader: {
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

//make this component available to the app
export default Likes;
