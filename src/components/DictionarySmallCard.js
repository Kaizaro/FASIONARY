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
        height: scaleVertical(160),
        borderRadius: scaleVertical(20),
    },
    image: {
        width: scaleHorizontal(144),
        height: scaleVertical(160),
    },
    labelContainer: {
        width: '100%',
        height: scaleVertical(40),
        opacity: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontFamily: APP_FONTS.SOFIA_PRO_EXTRA_LIGHT_ITALIC,
        fontSize: scaleHorizontal(12),
        color: APP_COLORS.BLACK_COLOR,
    },
});
