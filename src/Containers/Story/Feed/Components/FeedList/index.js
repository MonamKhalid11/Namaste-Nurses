//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FeedItem from '../FeedItem'
// create a component
const FeedListing = (props) => {
    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {props.feeds.map((feed) => {
                return (
                    <FeedItem
                        feed={feed}
                        navigation={props.navigation}
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
        paddingBottom: 50
    },
});

//make this component available to the app
export default FeedListing;
