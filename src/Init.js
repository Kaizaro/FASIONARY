import React, {PureComponent} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import {scaleHorizontal, scaleVertical} from './lib/util';

export let {width, height} = Dimensions.get('window');

export default class Init extends PureComponent {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'MainStack',
                    },
                ],
            });
        }, 3000);
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <ActivityIndicator style={styles.loader} color={'blue'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader: {
        width: scaleHorizontal(200),
        height: scaleHorizontal(200),
    },
});
