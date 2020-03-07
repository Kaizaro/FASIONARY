import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {width, height} from '../../../navigation/AppNavigator';

export default class Dictionary extends Component {
    render() {
        console.log(width, height);
        return (
            <View style={styles.container}>
                <Text>Visual Dictionary</Text>
                <Text>
                    Visual Dictionary helps you to define professional tools and
                    termins by photo and images, and provides translations on
                    other languages
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 25,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
