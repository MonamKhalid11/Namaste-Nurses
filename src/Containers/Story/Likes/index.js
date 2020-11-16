//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../../Theme';
import CustomHeader from '../../../Components/CustomHeader'
import LikesListing from './Components/LikesListings'
// create a component
const Likes = ({ route, navigation }) => {
    const { params } = route
    return (
        <View style={styles.container}>
            <CustomHeader
                headerColor={Colors.feebackgroundColor}
                screenTitle={'View Likes'}
                navigation={navigation}
            />
            <LikesListing
                likes={params.likes}
            />
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
export default Likes;
