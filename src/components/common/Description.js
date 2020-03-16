import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {APP_STYLES} from '../../styleguide/Styles';

export default class Description extends PureComponent {
    render() {
        const {text, viewStyle, textStyle} = this.props;
        return (
            <View style={viewStyle}>
                <Text
                    style={{
                        ...APP_STYLES.MAIN_TEXT,
                        ...textStyle,
                    }}>
                    {text}
                </Text>
            </View>
        );
    }
}
