import React, {Component} from 'react';
import Divide from '../../../components/common/Divide';
import {TagRow} from '../../../components/common/TagRow';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {DefaultContainer} from '../../../components/common/DefaultContainer';
import {scaleHorizontal} from '../../../../helpers/lib/util';
import Button from '../../../components/common/Button';
import {Player} from '@react-native-community/audio-toolkit';
import sound from '../../../../../assets/sounds/outwear/00 - 01 - I. Nihon-go no hatsuon- 1. Kana to Haku.mp3';
import {APP_COLORS} from '../../../../helpers/styleguide/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavouritesIcon from '../../../../../assets/icons/Favourites.png';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';

export default class CourseDetail extends Component {
    onPlayIconPress = cardData => {
        console.log('should play sound');
        console.log(cardData);
        new Player(
            '../../../../assets/sounds/outwear/00 - 01 - I. Nihon-go no hatsuon- 1. Kana to Haku.mp3',
        ).play();
    };

    onFavouritesIconPress = cardData => {
        console.log(cardData);
    };

    render() {
        const cardData = this.props.route.params.cardData;
        const tagList = this.props.route.params.tagList;
        console.log(cardData);
        console.log(tagList);
        return (
            <DefaultContainer>
                <Divide />
                <TagRow tagList={tagList} />
                <View style={styles.container}>
                    <Image
                        source={cardData.image}
                        resizeMode={'contain'}
                        style={{
                            width: scaleHorizontal(300),
                            height: scaleHorizontal(300),
                        }}
                    />
                    <Text style={APP_STYLES.CARD_NAME_TEXT}>
                        {cardData.name}
                    </Text>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() =>
                                this.onFavouritesIconPress(cardData)
                            }>
                            <Image
                                source={FavouritesIcon}
                                resizeMode={'contain'}
                                style={{
                                    width: scaleHorizontal(30),
                                    height: scaleHorizontal(30),
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPlayIconPress(cardData)}>
                            <Icon
                                name={'volume-up'}
                                size={scaleHorizontal(25)}
                                color={APP_COLORS.BLACK_COLOR}
                            />
                        </TouchableOpacity>
                    </View>
                    {/*<Button*/}
                    {/*    text={'play'}*/}
                    {/*    onPress={() => this.playSound(cardData)}*/}
                    {/*/>*/}
                </View>
            </DefaultContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '86%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});
