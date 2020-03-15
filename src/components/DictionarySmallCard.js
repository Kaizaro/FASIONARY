import React, {PureComponent} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {scaleHorizontal, scaleVertical} from '../lib/util';
import {APP_FONTS} from '../styleguide/Fonts';
import {APP_COLORS} from '../styleguide/Colors';

export default class DictionarySmallCard extends PureComponent {
    render() {
        const {image, text} = this.props;
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={image}
                    style={styles.image}
                    resizeMode={'cover'}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>{text}</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: scaleHorizontal(144),
        height: scaleHorizontal(144),
        borderRadius: scaleVertical(20),
    },
    image: {
        width: scaleHorizontal(144),
        height: scaleHorizontal(144),
        borderRadius: scaleVertical(20),
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    labelContainer: {
        width: '100%',
        height: scaleVertical(40),
        backgroundColor: `${APP_COLORS.BACKGROUND_COLOR}50`,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontFamily: APP_FONTS.TEXT_ALTERNATIVE,
        fontSize: scaleHorizontal(16),
        color: APP_COLORS.BLACK_COLOR,
    },
});
