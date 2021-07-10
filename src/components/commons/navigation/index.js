import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import AuthScreen from '@screens/Auth';
import HomeScreen from '@screens/Home';
import {ETASimpleText} from '@etaui';
import {AntDesign} from '@icons';
import {CHECK_TOKEN, LOGOUT} from '@redux/user/actions';

const LogoutButton = styled.TouchableOpacity.attrs({
	underlayColor: 'transparent',
})`
	justify-content: flex-end;
	align-items: center;
  height: 40px;
  width: 100px;
`;

const mapStateToProps = (state, props) => {
	const { userToken } = state.user
	return { userToken }
}

const mapDispatchProps = (dispatch, props) => ({
	checkToken: () => {
		dispatch({
			type: CHECK_TOKEN,
			payload: {},
		})
	},

	logoutUser: () => {
		dispatch({
			type: LOGOUT,
			payload: {},
		})
	},
})

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            if (route.name === 'Home') {
              return (
                <AntDesign
                  name={
                    focused
                      ? 'home'
                      : 'home'
                  }
                  size={24}
                  color='#333'
                />
              )
            }
          }
        })}
        tabBarOptions={{
          showLabel: true,
          activeTintColor: 'black',
          inactiveTintColor: '#333',
          style: {
            borderTopColor: 'transparent',
            backgroundColor: '#fff',
          },
        }}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
      </Tab.Navigator>
    </>
  );
}

const Stack = createStackNavigator();
const StackNavigation = ({checkToken, logoutUser, userToken}) => {
  const [ token, settoken ] = useState(null)

  useEffect(() => {
		checkToken()
    _getTokenAsyncStorage()
	}, [userToken])
  
  const _getTokenAsyncStorage = async () => {
    let _token = await AsyncStorage.getItem('@storage_token')
    if (_token) {
      settoken(_token)
    } else {
      settoken(null)
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth'>
        {token == null ? (
        <Stack.Screen
          name='Auth'
          component={AuthScreen}
          options={() => ({
            title: 'Welcome',
            headerShown: !true,
            headerTransparent: true,
          })}
        />
        ) : (
        <Stack.Screen
          name='Home'
          component={Navigation}
          options={({navigation, route}) => ({
            title: 'My photos',
            headerStyle: {
              height: 120,
            },
            headerTitleContainerStyle: {
              height: 60,
              justifyContent: 'flex-end',
            },
            headerShown: true,
            headerTransparent: !true,
            headerRight: () => (
              <LogoutButton
                onPress={() => logoutUser()}
              >
                <ETASimpleText
                  size={12}
                  weight='800'
                  color='#373a4d'
                  align='left'>
                  LOG OUT
                </ETASimpleText>
              </LogoutButton>
            ),
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          })}
        />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default StackNavigation;

const StackNavigationConnect = connect(
	mapStateToProps,
	mapDispatchProps,
)(StackNavigation)

export default StackNavigationConnect