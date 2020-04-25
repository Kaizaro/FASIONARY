import {navigatorRef} from './AppNavigator';

export const routeNavigate = (route, screen, params) => {
    navigatorRef.current?.navigate(route, {
        screen,
        params,
    });
};

export const routeBack = () => {
    navigatorRef.current?.goBack();
};

export const routeReset = (route, screen, params) => {
    console.log(navigatorRef);
    console.log(navigatorRef.current);
    navigatorRef.current?.reset({
        index: 0,
        routes: [
            {
                name: route,
                params,
            },
        ],
    });
};
