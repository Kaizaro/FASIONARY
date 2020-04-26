import React, {Component} from 'react';
import {
    Alert,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {scaleHorizontal, scaleVertical} from '../../../../helpers/lib/util';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';
import Divide from '../../../components/common/Divide';
import Avatar from '../../../../../assets/images/sample.png';
import {APP_COLORS} from '../../../../helpers/styleguide/Colors';

export default class Profile extends Component {
    onSettingPress = setting => {
        console.log(setting);
        Alert.alert(
            'Setting is unavailable',
            'Unfortunately, right now settings is not available.',
        );
    };

    renderSetting = (setting, disabled) => (
        <TouchableOpacity
            onPress={() => this.onSettingPress(setting)}
            disabled={disabled}
            style={styles.row}>
            <Text
                style={
                    disabled
                        ? APP_STYLES.SETTING_TEXT
                        : {
                              ...APP_STYLES.SETTING_TEXT,
                              color: APP_COLORS.BADGE_COLORS.SPACE_BLUE,
                          }
                }>
                {setting}
            </Text>
        </TouchableOpacity>
    );

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    {/*<Title title={'Profile'} />*/}
                    {/*<Description*/}
                    {/*    text={'Profile not available right now'}*/}
                    {/*    viewStyle={styles.divideContainer}*/}
                    {/*/>*/}

                    {/* Name block */}
                    <View style={styles.nameBlock}>
                        <Image
                            source={Avatar}
                            resizeMode={'contain'}
                            style={styles.avatar}
                        />
                        <Text style={styles.name}>Pavel Fedorov</Text>
                    </View>

                    {/* Contacts Block */}
                    <View style={styles.setting}>
                        {this.renderSetting('gravastarz@gmail.com', true)}
                        {this.renderSetting('+1 424 439-8932', true)}
                    </View>

                    {/*Settings block*/}
                    <View style={styles.setting}>
                        {this.renderSetting('Account')}
                        {this.renderSetting('Payments')}
                        {this.renderSetting('Settings')}
                    </View>

                    {/*Settings block*/}
                    <View style={styles.setting}>
                        {this.renderSetting('Term and conditions')}
                        {this.renderSetting('FAQ & Help')}
                        {this.renderSetting('About')}
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    divideContainer: {
        marginTop: scaleVertical(20),
    },
    nameBlock: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: scaleHorizontal(100),
        height: scaleHorizontal(100),
        borderRadius: scaleHorizontal(100),
    },
    name: {
        marginLeft: scaleHorizontal(30),
        ...APP_STYLES.BOLD_TEXT,
    },
    setting: {
        marginTop: scaleVertical(20),
    },
    row: {
        marginTop: scaleVertical(10),
    },
});
