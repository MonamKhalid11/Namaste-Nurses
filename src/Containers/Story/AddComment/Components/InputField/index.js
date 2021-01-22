//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Colors, WP } from '../../../../../Theme';
import { useTranslation } from 'react-i18next'

// create a component
import { MentionInput, Tag } from 'react-native-complete-mentions';

const suggestedUsers = [{ name: 'John', id: 1, profile: "https://www.w3schools.com/bootstrap/img_avatar3.png" }, { name: 'Eve', id: 2, profile: "https://www.w3schools.com/bootstrap/img_avatar3.png" }];

function UserSuggestion({ name, onPress, profile }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.userSuggestionContainer}>
            <Image
                source={{ uri: profile }}
                style={styles.dp}
            />
            <Text style={styles.nurseName}>{name}</Text>
        </TouchableOpacity>
    );
}

/*
  This solution shows how to render the suggestions outside of the component
*/
const CommentInputBox = (props) => {
    const { t } = useTranslation()
    const [value, setValue] = React.useState('');
    const [keyword, setKeyword] = React.useState('');
    const [tracking, setTracking] = React.useState(false);
    const [extractedValue, setExtractedValue] = React.useState('');

    useEffect(() => {
        console.log(extractedValue);
    }, [extractedValue]);

    const commitRef = React.useRef();
    const extractCommit = commit => {
        commitRef.current = commit;
    };

    const renderSuggestedUsers = () => {
        if (!tracking || keyword === '') return null;
        return suggestedUsers.map(user => (
            <UserSuggestion
                name={user.name}
                id={user.id}
                profile={user.profile}
                onPress={() => {
                    if (commitRef.current) {
                        commitRef.current({ name: user.name, id: user.id });
                    }
                }}
            />
        ));
    };
    return (
        <View style={styles.container}>
            <View style={styles.postingContainer}>
                {/* <TextInput
                    {...props}
                    style={styles.input}
                    placeholderTextColor={Colors.pickerBorder}
                /> */}
                <MentionInput
                    value={value}
                    onChangeText={setValue}
                    onExtractedStringChange={setExtractedValue}
                    style={styles.input}>
                    <Tag
                        tag="@"
                        onKeywordChange={setKeyword}
                        onStopTracking={() => setTracking(false)}
                        onStartTracking={() => setTracking(true)}
                        extractCommit={extractCommit}
                        renderText={mention => <Text style={styles.userText}>{mention.name}</Text>}
                        formatText={text => `@${text}`}
                        extractString={mention => `@[${mention.name}](id:${mention.id})`}
                    />
                </MentionInput>
                <TouchableOpacity onPress={props.onPress}>
                    <Text allowFontScaling={false} style={styles.post}>{t('addComment.post')}</Text>
                </TouchableOpacity>

            </View>

            {renderSuggestedUsers()}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: {
    //     display: 'flex',
    //     backgroundColor: Colors.inputGrey,
    //     height: WP('25'),
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.inputGrey,

    },
    postingContainer: {
        display: 'flex',
        height: WP('15'),
        width: WP('90'),
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    input: {
        width: WP('70'),
        paddingRight: WP('5'),
        color: Colors.grey,
        fontFamily: "Assistant-Regular"


    },
    post: {
        color: Colors.feebackgroundColor,
        fontFamily: 'Assistant-Bold'
    },
    input: {
        width: WP('70'),
        paddingRight: WP('5'),
        color: Colors.grey,
        fontFamily: "Assistant-Regular"
    },
    userSuggestionContainer: {
        // padding: 10,
        // borderWidth: 2,
        // borderColor: 'blue',
        // marginBottom: 2,
        backgroundColor: "white",
        shadowOpacity: 0.4,
        height: WP('10'),
        marginBottom: WP('1'),
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: WP('3')

    },
    userText: {
        fontWeight: 'bold',
        color: 'blue',
    },
    dp: {
        height: WP('8'),
        width: WP('8'),
        resizeMode: 'cover',
        borderRadius: 100
    },
    nurseName: {
        color: Colors.black,
        fontFamily: "Assistant-Bold",
        marginLeft: WP('3')
    }
});

//make this component available to the app
export default CommentInputBox;
