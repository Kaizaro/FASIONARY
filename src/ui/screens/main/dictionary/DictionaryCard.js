import React, {Component} from 'react';
import Divide from '../../../components/common/Divide';
import {TagRow} from '../../../components/common/TagRow';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {DefaultContainer} from '../../../components/common/DefaultContainer';
import {scaleHorizontal} from '../../../../helpers/lib/util';
import Button from '../../../components/common/Button';
import {Player} from '@react-native-community/audio-toolkit';
import sound from '../../../../../assets/sounds/outwear/00 - 01 - I. Nihon-go no hatsuon- 1. Kana to Haku.mp3'

export default class DictionaryCard extends Component {
    playSound = cardData => {
        console.log('should play sound');
        console.log(cardData);
        new Player('../../../../assets/sounds/outwear/00 - 01 - I. Nihon-go no hatsuon- 1. Kana to Haku.mp3').play();
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
                    <Button
                        text={'play'}
                        onPress={() => this.playSound(cardData)}
                    />
                </View>
            </DefaultContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '86%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
