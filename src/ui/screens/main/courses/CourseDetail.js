import React, {Component} from 'react';
import Divide from '../../../components/common/Divide';
import {TagRow} from '../../../components/common/TagRow';
import {
    Alert,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {DefaultContainer} from '../../../components/common/DefaultContainer';
import {scaleHorizontal, scaleVertical} from '../../../../helpers/lib/util';
import Button from '../../../components/common/Button';
import {Player} from '@react-native-community/audio-toolkit';
import sound from '../../../../../assets/sounds/outwear/00 - 01 - I. Nihon-go no hatsuon- 1. Kana to Haku.mp3';
import {APP_COLORS} from '../../../../helpers/styleguide/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavouritesIcon from '../../../../../assets/icons/Favourites.png';
import {APP_STYLES} from '../../../../helpers/styleguide/Styles';

export default class CourseDetail extends Component {
    onStartCourseButtonPress = course => {
        console.log(course);
        Alert.alert('Success!', 'Congratulations! Your course is active.');
    };

    render() {
        const course = this.props.route.params.course;
        return (
            <DefaultContainer>
                <Divide />
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={APP_STYLES.TITLE_TEXT}>{course.name}</Text>
                    </View>
                    <Text style={APP_STYLES.MAIN_TEXT}>
                        {course.description}
                    </Text>
                    <Text style={APP_STYLES.MAIN_TEXT}>
                        {course.about}
                    </Text>
                    {course.conditions.map((item, index) => {
                        return (
                            <View>
                                <Text style={APP_STYLES.CARD_NAME_TEXT}>{`${item.type}: ${item.details}`}</Text>
                            </View>
                        );
                    })}
                    <View>
                        <View>
                            <Text style={APP_STYLES.CARD_NAME_TEXT}>Professors</Text>
                        </View>
                        <View style={{marginTop: scaleVertical(10)}}>
                            <Text style={APP_STYLES.MAIN_TEXT}>{`${course.professors}`}</Text>
                        </View>
                    </View>
                </View>
                <Button
                    text={'Apply Now'}
                    onPress={() => this.onStartCourseButtonPress(course)}
                />
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
    title: {
        width: '100%',
        marginTop: scaleVertical(10),
    },
});
