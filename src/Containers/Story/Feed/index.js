//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import { Colors, WP } from '../../../Theme';
import FeedListing from './Components/FeedList'
import { Layout, Fonts, Images } from '@/Theme'

// create a component
const Feed = (props) => {
    const [nurseFeed, setNurseFeed] = useState([
        {
            id: Math.random(),
            profilepic: Images.noora,
            lastPosted: '35 days ago',
            description: `Here's some motivation to help you power through this Thursday!`,
            images: Images.feed,
            title: "Noora Health",
            comments: [
                {
                    id: Math.random(),
                    name: 'Alisha',
                    posted: '7 days ago',
                    comment: 'Hello sir , update me thanks!',
                },
                {
                    id: Math.random(),
                    name: 'Taranjeet',
                    posted: '27 days ago',
                    comment: 'thanks sir',
                },
                {
                    id: Math.random(),
                    name: 'Surekha',
                    posted: '7 days ago',
                    comment: 'thanks for giving this message',
                },
            ],
            likes: [
                {
                    id: Math.random(),
                    name: 'Lovely Chawla',
                    location: 'Punjab'
                },
                {
                    id: Math.random(),
                    name: 'Lovely Chawla',
                    location: 'Punjab'
                },
                {
                    id: Math.random(),
                    name: 'Lovely Chawla',
                    location: 'Punjab'
                },
                {
                    id: Math.random(),
                    name: 'Lovely Chawla',
                    location: 'Punjab'
                },
            ]
        },
        {
            id: Math.random(),
            profilepic: Images.noora,
            lastPosted: '35 days ago',
            description: `Here's some motivation to help you power through this Thursday!`,
            images: Images.feed,
            title: "Noora Health",
            comments: [
                {
                    id: Math.random(),
                    name: 'Alisha',
                    posted: '7 days ago',
                    comment: 'Hello sir , update me thanks!',
                },
                {
                    id: Math.random(),
                    name: 'Taranjeet',
                    posted: '27 days ago',
                    comment: 'thanks sir',
                },
                {
                    id: Math.random(),
                    name: 'Surekha',
                    posted: '7 days ago',
                    comment: 'thanks for giving this message',
                },
            ]
        },
    ])
    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.feebackgroundColor}
                screenTitle={'Hi Lovely!'}
                navigation={props.navigation}
            />
            <FeedListing
                navigation={props.navigation}
                feeds={nurseFeed}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Feed;
