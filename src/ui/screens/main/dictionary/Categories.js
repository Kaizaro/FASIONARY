import React, {Component, Fragment} from 'react';
import {
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {width, height} from '../../Init';
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
import {CATEGORIES} from '../../../../constants/data/dictionary/Categories';

const description =
    'Visual Dictionary helps you to define professional tools and termins by photo and images, and provides translations on other languages';

export default class Categories extends Component {
    onPressCard = cardData => {
        console.log(cardData);
        if (cardData.name === 'Clothes') {
            this.props.navigation.navigate('SubCategories', {
                tagList: [cardData],
            });
        } else {
            Alert.alert(
                `${cardData.name} is unavailable`,
                'Unfortunately, right now this category is not available.',
            );
        }
    };

    renderItem = ({item, index}) => {
        console.log(item, index);
        return (
            <Fragment>
                {index === 0 && (
                    <Description
                        text={description}
                        viewStyle={{marginBottom: scaleVertical(20)}}
                    />
                )}
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
            </Fragment>
        );
    };

    render() {
        console.log(width, height);
        const chunkedCategories = _.chunk(CATEGORIES, 2);
        console.log(chunkedCategories);
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={APP_STYLES.CONTAINER}>
                    <View style={styles.titleContainer}>
                        <Title title={'Dictionary'} />
                        <StarButton />
                    </View>
                    <View style={styles.flatlistContainer}>
                        <FlatList
                            keyExtractor={item => item[0].id + item[1].name}
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
        marginTop: scaleVertical(10),
        width: '100%',
        height: '90%',
    },
    flatlistContentContainer: {
        width: '100%',
        paddingBottom: scaleVertical(20),
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
