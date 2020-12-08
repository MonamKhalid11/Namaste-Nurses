//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FeedItem from '../FeedItem'
// create a component
const FeedListing = (props) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={props.feeds}
                extraData={props.feeds}
                renderItem={({ item }) => (
                    <FeedItem
                        feed={item}
                        navigation={props.navigation}
                    />
                )}
                {...props}

                keyExtractor={item => item.id}
            />
        </View>
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
