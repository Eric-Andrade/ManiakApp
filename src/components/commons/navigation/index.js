import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import AuthScreen from '@screens/Auth';
import HomeScreen from '@screens/Home';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen
          name='Auth'
          component={AuthScreen}
          options={() => ({
            title: 'Welcome',
            headerShown: !true,
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={({navigation, route}) => ({
            title: '',
            headerShown: true,
            headerTransparent: !true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
