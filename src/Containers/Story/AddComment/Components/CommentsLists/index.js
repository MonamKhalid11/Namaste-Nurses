//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../../../../Theme';
import CommentItem from '../CommentItem'
// create a component
const CommentsListings = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {props.comments.map((comment) => {
                return (
                    <CommentItem
                        comment={comment}
                    />
                )
            })}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.white
    },
});

//make this component available to the app
export default CommentsListings;
