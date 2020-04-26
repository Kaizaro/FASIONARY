import React, {createRef} from 'react';
import {Image} from 'react-native';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {APP_COLORS} from '../styleguide/Colors';
import Courses from '../../ui/screens/main/courses/Courses';
import Library from '../../ui/screens/main/library/Library';
import Profile from '../../ui/screens/main/profile/Profile';
import DictionaryIcon from '../../../assets/icons/tabBarIcons/DictionaryTabIcon.png';
import CoursesIcon from '../../../assets/icons/tabBarIcons/CoursesTabIcon.png';
import LibraryIcon from '../../../assets/icons/tabBarIcons/LibraryTabIcon.png';
import ProfileIcon from '../../../assets/icons/tabBarIcons/ProfileTabIcon.png';
import Init from '../../ui/screens/Init';
import Categories from '../../ui/screens/main/dictionary/Categories';
import SubCategories from '../../ui/screens/main/dictionary/SubCategories';
import DynamicGrid from '../../ui/screens/main/dictionary/DynamicGrid';
import DictionaryCard from '../../ui/screens/main/dictionary/DictionaryCard';
import {Favourites} from '../../ui/screens/main/favourites/Favourites';
import SubCourses from '../../ui/screens/main/courses/SubCourses';
import CourseDetail from '../../ui/screens/main/courses/CourseDetail';
import LibraryList from '../../ui/screens/main/library/LibraryList';
import {LibraryView} from '../../ui/screens/main/library/LibraryView';

export let navigatorRef = createRef();

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DictionaryStack = createStackNavigator();
const CoursesStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const FavouritesStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const AppStackSwitcher = () => (
    <AppStack.Navigator initialRouteName={'Init'}>
        <AppStack.Screen
            name={'Init'}
            component={Init}
            options={{header: () => null}}
        />
        <AppStack.Screen name={'AuthStack'} component={AuthStackSwitcher} />
        <AppStack.Screen
            name={'MainStack'}
            component={MainStackSwitcher}
            options={{header: () => null}}
        />
    </AppStack.Navigator>
);

const AuthStackSwitcher = props => (
    <AuthStack.Navigator>
        <AuthStack.Screen name={'Auth'} component={Profile} />
    </AuthStack.Navigator>
);

const MainStackSwitcher = props => (
    <Tab.Navigator
        initialRouteName={'DictionaryStackSwitcher'}
        tabBarOptions={{
            showIcon: true,
            showLabel: false,
            activeTintColor: APP_COLORS.PRIMARY_COLOR_ORANGE,
            inactiveTintColor: APP_COLORS.BLACK_COLOR,
        }}>
        <Tab.Screen
            name={'DictionaryStackSwitcher'}
            component={DictionaryStackSwitcher}
            options={{
                tabBarIcon: state => (
                    <Image
                        source={DictionaryIcon}
                        resizeMode={'contain'}
                        style={tabIconStyle(state.focused)}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={'CoursesStackSwitcher'}
            component={CoursesStackSwitcher}
            options={{
                tabBarIcon: state => (
                    <Image
                        source={CoursesIcon}
                        resizeMode={'contain'}
                        style={tabIconStyle(state.focused)}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={'LibraryStackSwitcher'}
            component={LibraryStackSwitcher}
            options={{
                tabBarIcon: state => (
                    <Image
                        source={LibraryIcon}
                        resizeMode={'contain'}
                        style={tabIconStyle(state.focused)}
                    />
                ),
            }}
        />
        <Tab.Screen
            name={'ProfileStackSwitcher'}
            component={ProfileStackSwitcher}
            options={{
                tabBarIcon: state => (
                    <Image
                        source={ProfileIcon}
                        resizeMode={'contain'}
                        style={tabIconStyle(state.focused)}
                    />
                ),
            }}
        />
    </Tab.Navigator>
);

const DictionaryStackSwitcher = () => (
    <DictionaryStack.Navigator
        initialRouteName={'Categories'}
        headerMode={false}>
        <DictionaryStack.Screen name={'Categories'} component={Categories} />
        <DictionaryStack.Screen
            name={'SubCategories'}
            component={SubCategories}
        />
        <DictionaryStack.Screen name={'DynamicGrid'} component={DynamicGrid} />
        <DictionaryStack.Screen
            name={'DictionaryCard'}
            component={DictionaryCard}
        />
    </DictionaryStack.Navigator>
);

const CoursesStackSwitcher = () => (
    <CoursesStack.Navigator initialRouteName={'Courses'} headerMode={false}>
        <CoursesStack.Screen name={'Courses'} component={Courses} />
        <CoursesStack.Screen name={'SubCourses'} component={SubCourses} />
        <CoursesStack.Screen name={'CourseDetail'} component={CourseDetail} />
    </CoursesStack.Navigator>
);

const LibraryStackSwitcher = () => (
    <LibraryStack.Navigator initialRouteName={'Library'} headerMode={false}>
        <LibraryStack.Screen name={'Library'} component={Library} />
        <LibraryStack.Screen name={'LibraryList'} component={LibraryList} />
        <LibraryStack.Screen name={'LibraryView'} component={LibraryView} />
    </LibraryStack.Navigator>
);

const FavouritesStackSwitcher = () => (
    <FavouritesStack.Navigator initialRouteName={'Favourites'} headerMode={false}>
        <FavouritesStack.Screen name={'Favourites'} component={Favourites} />
    </FavouritesStack.Navigator>
);

const ProfileStackSwitcher = () => (
    <ProfileStack.Navigator initialRouteName={'Profile'} headerMode={false}>
        <ProfileStack.Screen name={'Profile'} component={Profile} />
    </ProfileStack.Navigator>
);

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: APP_COLORS.BACKGROUND_COLOR,
    },
};

const tabIconStyle = active => ({
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    tintColor: active
        ? APP_COLORS.PRIMARY_COLOR_ORANGE
        : APP_COLORS.BLACK_COLOR,
});

const AppNavigator = () => (
    <NavigationContainer theme={theme} ref={navigatorRef}>
        <AppStackSwitcher />
    </NavigationContainer>
);

export default AppNavigator;
