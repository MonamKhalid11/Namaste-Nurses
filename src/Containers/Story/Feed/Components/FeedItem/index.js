//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { Colors, Images, WP } from '../../../../../Theme';

// create a component
const FeedItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.descriptionContainer}>
                <View style={styles.nameProfileContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={props.feed.profilepic}
                            style={styles.dp}
                        />
                    </View>
                    <View style={styles.headingContainer}>
                        <Text allowFontScaling={false} style={styles.title}>{props.feed.title}</Text>
                        <Text allowFontScaling={false} style={styles.posted}>{props.feed.lastPosted}</Text>
                    </View>
                </View>
                <Text allowFontScaling={false} style={styles.description}>{props.feed.description}</Text>
            </View>
            <View style={styles.feedImageContainer}>
                <Image
                    source={props.feed.images}
                    style={styles.feedImage}
                />
            </View>
            <View style={styles.likeCommentContainer}>
                <TouchableOpacity style={styles.iconContainer}
                    onPress={() => props.navigation.navigate('Likes', props.feed)}
                >
                    <Image
                        source={Images.like}
                        style={styles.icon}
                    />
                    <Text allowFontScaling={false} style={styles.like}>Liked</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer2}
                    onPress={() => props.navigation.navigate('AddComments', props.feed)}
                >
                    <Image
                        source={Images.chat}
                        style={styles.icon}
                    />
                    <Text allowFontScaling={false} style={styles.like}>Comment</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        marginLeft: WP('2')
    },
    title: {
        color: Colors.black,
        fontFamily: 'Assistant-Bold',
        fontSize: WP('4'),
        marginBottom: WP('1'),
    },
    posted: {
        color: Colors.pickerBorder,
        fontSize: WP('2.5')
    },
    description: {
        color: 'grey',
        fontSize: WP('3'),
        fontWeight: '400',
        paddingLeft: WP('2'),
        paddingRight: WP('2'),
        width: WP('90')
    },
    feedImage: {
        height: "100%",
        width: "100%",
        resizeMode: 'stretch'
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
        height: WP('5'),
        width: WP('5'),
        resizeMode: 'contain'
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
    like: {
        color: Colors.grey,
        marginLeft: WP('2')
    }
});

//make this component available to the app
export default FeedItem;
