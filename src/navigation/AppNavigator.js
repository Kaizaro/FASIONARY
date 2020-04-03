import React from 'react';
import {Image} from 'react-native';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {APP_COLORS} from '../styleguide/Colors';
import Courses from '../screens/main/courses/Courses';
import Library from '../screens/main/library/Library';
import Profile from '../screens/main/profile/Profile';
import DictionaryIcon from '../../assets/icons/tabBarIcons/DictionaryTabIcon.png';
import CoursesIcon from '../../assets/icons/tabBarIcons/CoursesTabIcon.png';
import LibraryIcon from '../../assets/icons/tabBarIcons/LibraryTabIcon.png';
import Init from '../Init';
import Categories from '../screens/main/dictionary/Categories';
import SubCategories from '../screens/main/dictionary/SubCategories';
import DynamicGrid from '../screens/main/dictionary/DynamicGrid';
import DictionaryCard from '../screens/main/dictionary/DictionaryCard';

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DictionaryStack = createStackNavigator();
const CoursesStack = createStackNavigator();
const LibraryStack = createStackNavigator();
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
    </CoursesStack.Navigator>
);

const LibraryStackSwitcher = () => (
    <LibraryStack.Navigator initialRouteName={'Library'} headerMode={false}>
        <LibraryStack.Screen name={'Library'} component={Library} />
    </LibraryStack.Navigator>
);

const ProfileStackSwitcher = () => (
    <ProfileStack.Navigator initialRouteName={'Profile'} headerMode={false}>
        <ProfileStack.Screen name={'Profile'} component={Profile} />
    </ProfileStack.Navigator>
);

const MainStackSwitcher = props => (
    <Tab.Navigator
        initialRouteName={'DictionaryStackSwitcher'}
        tabBarOptions={{
            showIcon: true,
            showLabel: false,
            activeTintColor: APP_COLORS.BADGE_COLORS.SPACE_BLUE,
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
                        source={CoursesIcon}
                        resizeMode={'contain'}
                        style={tabIconStyle(state.focused)}
                    />
                ),
            }}
        />
    </Tab.Navigator>
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
    width: 40,
    height: 40,
    tintColor: active
        ? APP_COLORS.BADGE_COLORS.SPACE_BLUE
        : APP_COLORS.BLACK_COLOR,
});

const AppNavigator = () => (
    <NavigationContainer theme={theme}>
        <AppStackSwitcher />
    </NavigationContainer>
);

export default AppNavigator;
