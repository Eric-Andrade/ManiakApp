import React, {useEffect} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, UIManager, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {store} from './src/store';
import {enableScreens} from 'react-native-screens';
import {Provider as ReduxProvider} from 'react-redux';
import {ToastProvider} from '@etaui/toast/ToastProvider';
import Navigation from '@commons/navigation';
import SplashScreen from 'react-native-splash-screen';

enableScreens();

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ReduxProvider store={store}>
        <ToastProvider>
          <Navigation />
        </ToastProvider>
      </ReduxProvider>
    </SafeAreaView>
  );
};

export default App;