import React, {Component} from 'react';
import Divide from '../../../components/common/Divide';
import {TagRow} from '../../../components/common/TagRow';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {DefaultContainer} from '../../../components/common/DefaultContainer';
import {scaleHorizontal} from '../../../lib/util';
import Button from '../../../components/common/Button';

export default class DictionaryCard extends Component {
    render() {
        const cardData = this.props.route.params.cardData;
        const tagList = this.props.route.params.tagList;
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
                    <Button text={'play'} />
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
