import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator />
            </PersistGate>
        </Provider>
    );
};

export default App;
