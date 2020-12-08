//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { Colors, Images, WP } from '../../../../../Theme';
import TimeAgo from 'react-native-timeago';
import { useDispatch, useSelector } from 'react-redux'
import { isOnline, ShowActivityIndicator } from '../../../../../Services';
import { addLikesToFeed, getNurseFeed } from '../../../../../Store/actions'
// create a component
import moment from 'moment'
const FeedItem = (props) => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const addLike = () => {
        isOnline((online) => {
            let params = {
                user_id: user.id,
                content_id: props.feed.id,
                entry_time: moment(new Date()).format('YYYY-MM-DD HH:MM:SS'),
                session_id: moment(new Date()).format('YYYY-MM-DD HH:MM:SS'),
                status: props.feed.like ? false : true,
                token: "j56sugRk029Po5DB",
                appuser_id: user.id,
                access_token: ""
            }
            setLoading(true)
            dispatch(addLikesToFeed(params, (success) => {
                dispatch(getNurseFeed(user.id, () => {
                    setLoading(false)
                }))

            }, (reject) => {
                setLoading(false)
            }))
        }, (offline) => {

        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.descriptionContainer}>
                <View style={styles.nameProfileContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={props.feed.user.profile_image ? { uri: props.feed.user.profile_image } : Images.noora}
                            style={styles.dp}
                        />
                    </View>
                    <View style={styles.headingContainer}>
                        <Text allowFontScaling={false} style={styles.title}>{props.feed.title}</Text>
                        <TimeAgo allowFontScaling={false} style={styles.posted} time={props.feed.entry_time} />

                    </View>
                </View>
                <Text allowFontScaling={false} style={styles.description}>{props.feed.description}</Text>
            </View>
            {props.feed.attachment_list.length > 0 ?
                <View style={styles.feedImageContainer}>
                    <Image
                        source={{ uri: props.feed.attachment_list[0].attachment }}
                        style={styles.feedImage}
                    />
                </View>
                :
                <View style={styles.feedImageContainer}>
                    <Image
                        source={Images.noora}
                        style={styles.feedImage}
                    />
                </View>

            }
            {/* <TouchableOpacity style={styles.likesContainer}
                onPress={() => props.navigation.navigate('Likes', props.feed)}
            >
                <Text allowFontScaling={false} style={styles.like}>{props.feed.like_count}</Text>
            </TouchableOpacity> */}
            <View style={styles.likeCommentContainer}>
                {loading ?
                    <View style={styles.iconContainer}>

                        {ShowActivityIndicator()}
                    </View>
                    :
                    <View style={styles.iconContainer}>
                        <TouchableOpacity
                            onPress={addLike}
                        >
                            <Image
                                source={props.feed.like ? Images.likeFilled : Images.likeEmpty}
                                style={[styles.icon, { tintColor: props.feed.like ? Colors.appColor : Colors.black }]}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.likesContent}
                            onPress={() => props.navigation.navigate('Likes', props.feed)}
                        >
                            <Text allowFontScaling={false} style={styles.like}>{props.feed.like_count}</Text>
                            <Text allowFontScaling={false} style={styles.like}>{props.feed.like_count > 1 ? "Likes" : "Like"}</Text>
                        </TouchableOpacity>
                    </View>
                }

                <TouchableOpacity style={styles.iconContainer2}
                    onPress={() => props.navigation.navigate('AddComments', props.feed)}
                >
                    <Image
                        source={Images.chat}
                        style={styles.icon}
                    />
                    <Text allowFontScaling={false} style={styles.like}>{props.feed.comment_count}</Text>
                    <Text allowFontScaling={false} style={styles.like}>{props.feed.comment_count > 1 ? "Comments" : "Comment"}</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: WP('0.7')
    },
    descriptionContainer: {
        display: 'flex',
        padding: WP('2'),
        backgroundColor: Colors.white
    },
    nameProfileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        height: WP('15'),
        width: WP('15'),
        borderRadius: 100,
        borderWidth: WP('1'),
        borderColor: Colors.white,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dp: {
        height: WP('13'),
        width: WP('13'),
        borderRadius: 100,
        resizeMode: 'contain'
    },
    headingContainer: {
        display: 'flex',
        marginLeft: WP('2'),
        paddingRight: WP('9')
    },
    title: {
        color: Colors.grey,
        fontFamily: 'Assistant-SemiBold',
        fontSize: WP('5'),
        marginBottom: WP('1'),
    },
    posted: {
        color: Colors.pickerBorder,
        fontSize: WP('4'),
        fontFamily: 'Assistant-SemiBold',
    },
    description: {
        color: Colors.grey,
        fontSize: WP('5'),
        paddingLeft: WP('2'),
        paddingRight: WP('2'),
        width: WP('90'),
        fontFamily: "Assistant-Regular",
    },
    feedImage: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover'
    },
    feedImageContainer: {
        display: 'flex',
        height: WP('70'),
        width: '100%'
    },
    likeCommentContainer: {
        display: 'flex',
        height: WP('15'),
        width: '100%',
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: WP('5'),
    },
    icon: {
        display: 'flex',
        height: WP('3.5'),
        width: WP('3.5'),
        resizeMode: 'contain',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: WP('18')
    },
    likesContainer: {
        display: 'flex',
        // height: WP('15'),
        width: '100%',
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: WP('5'),
        paddingTop: WP('3'),
    },
    like: {
        color: Colors.grey,
        marginLeft: WP('2'),
        fontSize: WP('4'),
        fontFamily: 'Assistant-Regular'
    },
    likesContent: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',

    }
});

//make this component available to the app
export default FeedItem;
