import React, {PureComponent} from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {scaleHorizontal, scaleVertical} from '../../lib/util';
import {APP_FONTS} from '../../styleguide/Fonts';
import {APP_COLORS} from '../../styleguide/Colors';

export default class DictionarySmallCard extends PureComponent {
    render() {
        const {image, text, onPress} = this.props;
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress}
                style={styles.container}>
                <ImageBackground
                    source={image}
                    style={styles.image}
                    resizeMode={'cover'}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>{text}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
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
        backgroundColor: `${APP_COLORS.BACKGROUND_COLOR}60`,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontFamily: APP_FONTS.TITLE,
        fontSize: scaleHorizontal(16),
        color: APP_COLORS.BACKGROUND_COLOR,
    },
});
