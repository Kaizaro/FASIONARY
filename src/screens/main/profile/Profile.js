import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {scaleHorizontal, scaleVertical} from '../../../lib/util';
import {APP_FONTS} from '../../../styleguide/Fonts';
import {APP_COLORS} from '../../../styleguide/Colors';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';

export default class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <Title title={'Profile'} />
                    <Description
                        text={'Profile not available right now'}
                        viewStyle={styles.divideContainer}
                    />
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
    divideContainer: {
        marginTop: scaleVertical(20),
    },
    title: {
        fontFamily: APP_FONTS.TITLE,
        fontSize: scaleHorizontal(36),
        color: APP_COLORS.PRIMARY_COLOR_ORANGE,
    },
    text: {
        fontFamily: APP_FONTS.TEXT_MAIN,
        fontSize: scaleHorizontal(16),
        color: APP_COLORS.BLACK_COLOR,
    },
});
