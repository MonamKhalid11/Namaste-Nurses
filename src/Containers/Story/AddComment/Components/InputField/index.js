//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Colors, WP } from '../../../../../Theme';
import { useTranslation } from 'react-i18next'
import { SearchNurses } from '../../../../../Store/actions'
import { useDispatch } from 'react-redux'
import { BASE_URL_IMAGE } from '../../../../../Services/index'

// create a component
// import { MentionInput, Tag } from 'react-native-complete-mentions';
import { MentionInput, replaceMentionValues } from 'react-native-controlled-mentions'


var suggestedUsers = [];

function UserSuggestion({ name, onPress, image }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.userSuggestionContainer}>
            <Image
                source={{ uri: `${BASE_URL_IMAGE}/${image}` }}
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
    const [nurses, setNurses] = React.useState(false);
    const dispatch = useDispatch()





    const renderSuggestions: FC<MentionSuggestionsProps> = ({ keyword, onSuggestionPress }) => {

        if (keyword == null) {
            return null;
        }
        else {
            dispatch(SearchNurses(keyword, (nurses) => {
                console.log('showing nurses here ', nurses)
                suggestedUsers = nurses
            }, (reject) => {
                suggestedUsers = [];
            }))
        }

        return (
            <View>
                {suggestedUsers
                    .map(one => (
                        <UserSuggestion
                            name={one.name}
                            id={one.id}
                            image={one.image}
                            onPress={() => { onSuggestionPress(one), props.taggedId(one.id) }}
                        />
                    ))
                }
            </View>
        );
    };
    const searchNurseListings = (nurse) => {
    }

    // console.log("showing values in keyword", keyword)
    return (
        <View style={styles.container}>
            <View style={styles.postingContainer}>
                {/* <TextInput
                    {...props}
                    style={styles.input}
                    placeholderTextColor={Colors.pickerBorder}
                /> */}
                {/* <MentionInput
                    value={value}
                    onChangeText={(text) => { setValue(text), props.onChangeText(text) }}
                    onExtractedStringChange={setExtractedValue}
                    placeholder={props.placeholder}
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
                </MentionInput> */}
                <MentionInput
                    value={value}
                    onChange={(text) => { setValue(text), props.onChangeText(text) }}

                    style={styles.input}
                    isBottomMentionSuggestionsRender={false}
                    partTypes={[
                        {
                            trigger: '@', // Should be a single character like '@' or '#'
                            renderSuggestions,
                            textStyle: { fontWeight: 'bold', color: Colors.grey }, // The mention style in the input
                        },
                    ]}
                />
                <TouchableOpacity onPress={() => { props.onPress() }}>
                    <Text allowFontScaling={false} style={styles.post}>{t('addComment.post')}</Text>
                </TouchableOpacity>

            </View>

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
        // height: WP('15'),
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
        shadowOpacity: 0.1,
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
