import React, {useState} from 'react';
import Divide from '../../../components/common/Divide';
import Tag from '../../../components/common/Tag';
import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet, Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {DefaultContainer} from '../../../components/common/DefaultContainer';
import {scaleHorizontal, scaleVertical} from '../../../lib/util';
import {TagRow} from '../../../components/common/TagRow';
import {IMAGES_DATA} from '../../../constants/data/ImagesData';
import outwearDusterCoat from '../../../../assets/sets/outwear/01-Duster-coat.png';
import outwearFrosterCoat from '../../../../assets/sets/outwear/02-Frock-Coat.png';
import outwearFullTrenchCoat from '../../../../assets/sets/outwear/03-Full-Trench-Coat.png';
import outwearMackintoshRaincoatCoat from '../../../../assets/sets/outwear/04-Mackintosh-Raincoat.png';
import outwearUlsterette from '../../../../assets/sets/outwear/05-Ulsterette.png';
import {APP_FONTS} from '../../../styleguide/Fonts';
import {APP_STYLES} from '../../../styleguide/Styles';

const data = [
    {
        tag: 'duster',
        name: 'Duster coat',
        image: outwearDusterCoat,
    },
    {
        tag: 'froster',
        name: 'Froster coat',
        image: outwearFrosterCoat,
    },
    {
        tag: 'full trench',
        name: 'Full trench coat',
        image: outwearFullTrenchCoat,
    },
    {
        tag: 'mackintosh',
        name: 'Mackintosh raincoat coat',
        image: outwearMackintoshRaincoatCoat,
    },
    {
        tag: 'ulsterette',
        name: 'Ulsterette',
        image: outwearUlsterette,
    },
];

const renderItem = ({item, index}, tagList) => {
    console.log(item, index, tagList);
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => console.log('pressed')}>
            <Image
                style={{
                    width: scaleHorizontal(165),
                    height: scaleHorizontal(300),
                }}
                resizeMode={'contain'}
                source={item.image}
            />
            <View style={styles.itemTextContainer}>
                <Text style={APP_STYLES.MAIN_TEXT}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const DynamicGrid = props => {
    console.log(props.route);
    const tagList = props.route.params.tagList;
    return (
        <DefaultContainer>
            <Divide />
            <TagRow tagList={tagList} />
            <View style={styles.divideContainer}>
                <FlatList
                    data={data}
                    renderItem={itemData => renderItem(itemData, tagList)}
                    numColumns={2}
                    contentContainerStyle={styles.contentContainer}
                />
            </View>
        </DefaultContainer>
    );
};

const styles = StyleSheet.create({
    divideContainer: {
        marginTop: scaleVertical(20),
        width: '100%',
        height: '85%',
    },
    contentContainer: {
        // width: '100%',
        // height: '89%',
        // marginTop: scaleVertical(20)
        // borderColor: 'green',
        // borderWidth: 1,
        paddingBottom: scaleVertical(20),
    },
    itemContainer: {
        alignItems: 'center',
        // justifyContent: 'center',
        // borderColor: 'red',
        // borderWidth: 1,
    },
    itemTextContainer: {
        marginTop: scaleVertical(5),
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DynamicGrid;
