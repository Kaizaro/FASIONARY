import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {APP_FONTS} from '../styleguide/Fonts';
import {scaleHorizontal} from '../lib/util';
import {APP_COLORS} from '../styleguide/Colors';

export default class Title extends PureComponent {
    render() {
        const {title, viewStyle, textStyle} = this.props;
        return (
            <View style={viewStyle}>
                <Text
                    style={{
                        ...styles.title,
                        ...textStyle,
                    }}>
                    {title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: APP_FONTS.TITLE,
        fontSize: scaleHorizontal(36),
        color: APP_COLORS.PRIMARY_COLOR_ORANGE,
    },
});
