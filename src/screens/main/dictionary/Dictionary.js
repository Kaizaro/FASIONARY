import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {width, height} from '../../../navigation/AppNavigator';
import Button from '../../../components/Button';
import {scaleHorizontal, scaleVertical} from '../../../lib/util';
import {APP_FONTS} from '../../../styleguide/Fonts';

export default class Dictionary extends Component {
    render() {
        console.log(width, height);
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.text}>Visual Dictionary</Text>
                    <Text>
                        Visual Dictionary helps you to define professional tools
                        and termins by photo and images, and provides
                        translations on other languages
                    </Text>
                    <Button text={'Favorites'} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingVertical: scaleVertical(20),
        paddingHorizontal: scaleHorizontal(25),
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        fontFamily: APP_FONTS.SOFIA_BOLD,
    },
});
