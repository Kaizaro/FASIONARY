import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {APP_STYLES} from '../../../helpers/styleguide/Styles';

export default class Tag extends PureComponent {
    render() {
        const {tag, viewStyle, textStyle} = this.props;
        return (
            <View
                style={{
                    ...APP_STYLES.TAG,
                    ...viewStyle,
                }}>
                <Text
                    style={{
                        ...APP_STYLES.MAIN_TEXT,
                        ...textStyle,
                    }}>
                    {tag}
                </Text>
            </View>
        );
    }
}
