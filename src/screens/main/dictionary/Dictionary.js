import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {width, height} from '../../../navigation/AppNavigator';
import Button from '../../../components/Button';
import {scaleHorizontal, scaleVertical} from '../../../lib/util';
import {APP_FONTS} from '../../../styleguide/Fonts';
import {APP_COLORS} from '../../../styleguide/Colors';

export default class Dictionary extends Component {
    render() {
        console.log(width, height);
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Visual Dictionary</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Visual Dictionary helps you to define professional
                            tools and termins by photo and images, and provides
                            translations on other languages
                        </Text>
                    </View>
                    <Button text={'Favorites'} style={styles.button} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingVertical: scaleVertical(20),
        paddingHorizontal: scaleHorizontal(20),
        justifyContent: 'flex-start',
    },
    titleContainer: {
        marginTop: scaleVertical(20),
    },
    textContainer: {
        marginTop: scaleVertical(20),
    },
    button: {
        marginTop: scaleVertical(20),
    },
    title: {
        fontFamily: APP_FONTS.SOFIA_BOLD,
        fontSize: scaleHorizontal(36),
        color: APP_COLORS.PRIMARY_COLOR,
    },
    text: {
        fontFamily: APP_FONTS.SOFIA_PRO_EXTRA_LIGHT,
        fontSize: scaleHorizontal(16),
        color: APP_COLORS.BLACK_COLOR,
    },
});
