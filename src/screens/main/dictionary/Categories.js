import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {width, height} from '../../../navigation/AppNavigator';
import Button from '../../../components/common/Button';
import {scaleHorizontal, scaleVertical} from '../../../lib/util';
import {APP_FONTS} from '../../../styleguide/Fonts';
import {APP_COLORS} from '../../../styleguide/Colors';
import _ from 'lodash';

import image from '../../../../assets/images/sample.jpeg';
import DictionarySmallCard from '../../../components/dictionary/DictionarySmallCard';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';
import {APP_STYLES} from '../../../styleguide/Styles';

export default class Categories extends Component {
    state = {
        categories: [
            {
                image: image,
                name: 'Clothes',
            },
            {
                image: image,
                name: 'Accessories',
            },
            {
                image: image,
                name: 'Pattern',
            },
            {
                image: image,
                name: 'Sewing',
            },
            {
                image: image,
                name: 'Any',
            },
            {
                image: image,
                name: 'Any',
            },
            {
                image: image,
                name: 'Any',
            },
            {
                image: image,
                name: 'Any',
            },
        ],
    };

    onPressCard = cardData => {
        console.log(cardData);
        this.props.navigation.navigate('SubCategories', {
            tagList: [cardData],
        });
    };

    renderItem = ({item, index}) => {
        console.log(item, index);
        return (
            <View style={styles.rowContainer}>
                {item.map((cardData, cardIndex) => {
                    console.log(cardIndex, cardData);
                    return (
                        <DictionarySmallCard
                            image={cardData.image}
                            text={cardData.name}
                            onPress={() => this.onPressCard(cardData)}
                        />
                    );
                })}
            </View>
        );
    };

    render() {
        console.log(width, height);
        const {categories} = this.state;
        const chunkedCategories = _.chunk(categories, 2);
        console.log(chunkedCategories);
        const description =
            'Visual Dictionary helps you to define professional tools and termins by photo and images, and provides translations on other languages';
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    <Title title={'Dictionary'} />
                    <Description
                        text={description}
                        viewStyle={styles.divideContainer}
                    />
                    <Button text={'Favorites'} style={styles.divideContainer} />
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            data={chunkedCategories}
                            renderItem={this.renderItem}
                            contentContainerStyle={
                                styles.flatlistContentContainer
                            }
                            bounces={false}
                            showsVerticalScrollIndicator={false}
                        />
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
    flatlistContainer: {
        marginTop: scaleVertical(20),
        width: '100%',
        height: scaleVertical(330),
    },
    flatlistContentContainer: {
        width: '100%',
        paddingVertical: scaleVertical(20),
    },
    rowContainer: {
        marginBottom: scaleVertical(20),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
