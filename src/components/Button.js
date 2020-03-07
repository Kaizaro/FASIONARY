import React, {Component} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

export default class Button extends Component {
    render() {
        const {icon, text} = this.props;
        return (
            <TouchableOpacity>
                <Text>{text}</Text>
            </TouchableOpacity>
        );
    }
}
