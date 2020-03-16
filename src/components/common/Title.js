import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {APP_STYLES} from '../../styleguide/Styles';

export default class Title extends PureComponent {
    render() {
        const {title, viewStyle, textStyle} = this.props;
        return (
            <View style={viewStyle}>
                <Text
                    style={{
                        ...APP_STYLES.TITLE_TEXT,
                        ...textStyle,
                    }}>
                    {title}
                </Text>
            </View>
        );
    }
}
