import React from 'react';
import Divide from '../../../components/common/Divide';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {DefaultContainer} from '../../../components/common/DefaultContainer';
import {scaleHorizontal, scaleVertical} from '../../../lib/util';
import {TagRow} from '../../../components/common/TagRow';
import {APP_STYLES} from '../../../styleguide/Styles';
import {DATA} from '../../../constants/data/Data';

const onImagePress = (item, index, tagList, props) => {
    console.log(item, index, tagList);
    // let oldTagList = tagList;
    // oldTagList.push(item);
    // props.navigation.navigate('DictionaryCard', {
    //     tagList: tagList,
    //     cardData: item,
    // });

    let oldTagList = [];
    props.route.params.tagList.map(tag => {
        console.log(tag);
        oldTagList.push(tag);
    });
    oldTagList.push(item);
    props.navigation.navigate('DictionaryCard', {
        tagList: oldTagList,
        cardData: item,
    });
};

const renderItem = ({item, index}, tagList, props) => {
    console.log(item, index, tagList);
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => onImagePress(item, index, tagList, props)}>
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
                    keyExtractor={item => item.tag + item.name}
                    data={DATA.OUTWEAR}
                    renderItem={itemData =>
                        renderItem(itemData, tagList, props)
                    }
                    numColumns={2}
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
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
        marginBottom: scaleVertical(10),
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
