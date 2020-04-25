import React, {Component} from 'react';
import {
    ActivityIndicator,
    Dimensions,
    Image,
    StyleSheet,
    View,
} from 'react-native';
import {APP_COLORS} from '../../helpers/styleguide/Colors';
import FashionaryLogo from '../../../assets/images/Logo.png';
import {router} from '../../helpers/navigation/Router';

export let {width, height} = Dimensions.get('window');

export default class Init extends Component {
    componentDidMount() {
        this._handleOrientation();
        setTimeout(() => {
            router();
        }, 3000);
    }

    _handleOrientation = () => {
        Dimensions.addEventListener('change', ({window, screen}) => {
            console.log(window.width, window.height);
            width = window.width;
            height = window.height;
            console.log('\n\n\nafter listener', width, height);
        });
    };

    componentWillUnmount() {
        console.log('unmount');
        Dimensions.removeEventListener('change');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={FashionaryLogo}
                    resizeMode={'contain'}
                    style={{width: 400, height: 400}}
                />
                <ActivityIndicator
                    size={'large'}
                    color={APP_COLORS.PRIMARY_COLOR_ORANGE}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});
