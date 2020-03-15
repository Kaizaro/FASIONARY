import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {APP_FONTS} from '../../styleguide/Fonts';
import {scaleHorizontal} from '../../lib/util';
import {APP_COLORS} from '../../styleguide/Colors';

export default class Description extends PureComponent {
    render() {
        const {text, viewStyle, textStyle} = this.props;
        return (
            <View style={viewStyle}>
                <Text
                    style={{
                        ...styles.text,
                        ...textStyle,
                    }}>
                    {text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: APP_FONTS.TEXT_MAIN,
        fontSize: scaleHorizontal(16),
        color: APP_COLORS.BLACK_COLOR,
    },
});
