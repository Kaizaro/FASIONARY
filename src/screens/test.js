import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class test extends Component {
    render() {
        console.log(this.props);
        return (
            <View style={{backgroundColor: '#323232'}}>
                <Text
                    onPress={() => this.props.navigation.navigate(
                        'MainStackSwitcher',
                    )}>
                    Test
                </Text>
            </View>
        );
    }
}
