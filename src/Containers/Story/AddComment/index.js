//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import FeedHeader from './Components/FeedHeader'
import { Colors, WP } from '../../../Theme';
import { Layout, Fonts, Images } from '@/Theme'
import CommentInputBox from './Components/InputField'
import CommentsListings from './Components/CommentsLists'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux'
import { fetchNurseComments, addComments } from '../../../Store/actions'
import { isOnline, ShowActivityIndicator, showToast } from '../../../Services';
import moment from 'moment'
// create a component
const AddComments = ({ route, navigation }) => {
    console.log("showing props here", route)
    const { params } = route
    const previousClasses = useSelector(state => state.story.nurseComments)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState([])
    const [addedComments, setAddedComments] = useState(null)
    useEffect(() => {
        isOnline((connected) => {
            setLoading(true)
            setComments([])
            dispatch(fetchNurseComments(user.id, params.id, (comments) => { setLoading(false), setComments(comments) }, () => { setLoading(false) }))
        },
            (offline) => {
                showToast(t('commonApp.internetError'))

            })
    }, [params])

    const addComment = () => {
        try {
            if (addedComments) {
                let parameter = {
                    user_id: user.id,
                    content_id: params.id,
                    comment: addedComments,
                    entry_time: moment().format('YYYY-MM-DD HH:MM:SS'),
                    session_id: moment().format('YYYY-MM-DD HH:MM:SS'),
                    token: "j56sugRk029Po5DB",
                    appuser_id: user.id,
                    access_token: "",
                }
                setLoading(true)
                isOnline((connected) => {
                    dispatch(addComments(parameter, (success) => {
                        dispatch(fetchNurseComments(user.id, params.id, (comments) => { setLoading(false), setComments(comments) }, () => { setLoading(false) }))
                        setAddedComments(null)
                    }, () => { setLoading(false), showToast('Please tap post again!') }))
                }, (offline) => {
                    showToast(t('commonApp.internetError'))

                })

            }
        }
        catch (error) {

        }
    }
    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.feebackgroundColor}
                screenTitle={'Add Comment'}
                navigation={navigation}
            />
            <KeyboardAwareScrollView>
                <FeedHeader
                    feed={params}
                />
                <CommentInputBox
                    placeholder={'Add Comment Here'}
                    onPress={addComment}
                    value={addedComments}
                    onChangeText={setAddedComments}


                />
                {loading ?
                    <View style={styles.loader}>
                        {ShowActivityIndicator()}
                    </View>
                    :
                    comments.length > 0 ?
                        <CommentsListings
                            comments={comments}
                        /> :
                        <Text style={styles.noComment}>No Comments Found</Text>
                }
            </KeyboardAwareScrollView>

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
        marginTop: WP('50'),
        fontSize: WP('5'),
        fontFamily: "Assistant-Regular"

    },
    noCommentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loader: {
        alignSelf: 'center',
        marginTop: WP('50'),
    }
});

//make this component available to the app
export default AddComments;
