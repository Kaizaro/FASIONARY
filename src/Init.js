import React, {Component} from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';

export let {width, height} = Dimensions.get('window');

export default class Init extends Component {
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
                <ActivityIndicator size={'large'} color={'blue'} />
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
});
