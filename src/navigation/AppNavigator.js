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

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
        initialRouteName={'Categories'}
        tabBarOptions={{
            showIcon: true,
            showLabel: false,
            activeTintColor: APP_COLORS.BADGE_COLORS.SPACE_BLUE,
            inactiveTintColor: APP_COLORS.BLACK_COLOR,
        }}>
        <Tab.Screen
            name={'Categories'}
            component={Categories}
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
            name={'Courses'}
            component={Courses}
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
            name={'Library'}
            component={Library}
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
            name={'Profile'}
            component={Profile}
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
