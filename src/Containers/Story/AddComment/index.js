//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomHeader from '../../../Components/CustomHeader'
import FeedHeader from './Components/FeedHeader'
import { Colors, WP } from '../../../Theme';
import { Layout, Fonts, Images } from '@/Theme'
import CommentInputBox from './Components/InputField'
import CommentsListings from './Components/CommentsLists'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// create a component
const AddComments = ({ route, navigation }) => {
    console.log("showing props here", route)
    const { params } = route

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
                    onPress={() => alert('posting...')}
                />
                <CommentsListings
                    comments={params.comments}
                />
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
});

//make this component available to the app
export default AddComments;
