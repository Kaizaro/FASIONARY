import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {width, height} from '../../../../helpers/navigation/AppNavigator';
import Button from '../../../components/common/Button';
import {scaleHorizontal, scaleVertical} from '../../../../helpers/lib/util';
import {APP_FONTS} from '../../../../helpers/styleguide/Fonts';
import {APP_COLORS} from '../../../../helpers/styleguide/Colors';
import _ from 'lodash';

import image from '../../../../../assets/images/sample.png';
import DictionarySmallCard from '../../../components/dictionary/DictionarySmallCard';
import Title from '../../../components/common/Title';
import Description from '../../../components/common/Description';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';
import StarButton from '../../../components/common/StarButton';
import {CATEGORIES} from '../../../../constants/Categories';

export default class Categories extends Component {
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
        const chunkedCategories = _.chunk(CATEGORIES, 2);
        console.log(chunkedCategories);
        const description =
            'Visual Dictionary helps you to define professional tools and termins by photo and images, and provides translations on other languages';
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    <View style={styles.titleContainer}>
                        <Title title={'Dictionary'} />
                        <StarButton />
                    </View>
                    <Description
                        text={description}
                        viewStyle={styles.divideContainer}
                    />
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            keyExtractor={item => item.name}
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
        height: scaleVertical(400),
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
    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
