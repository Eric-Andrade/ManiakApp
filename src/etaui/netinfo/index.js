import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import styled from 'styled-components/native';
import {ETASimpleText} from '@etaui';
import {Entypo} from '@icons';

const Root = styled.SafeAreaView`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-vertical: 10px;
  z-index: 1000;
  background-color: rgba(255, 59, 48, 1);
`;
const ButtonContainer = styled.TouchableOpacity`
	height: 18px;
	width: 18px;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	background-color: white
	margin-right: 10px
`;

const ETANetInfo = () => {
  // const themeContext = useContext(ThemeContext)
  const [isInternetReachable, setisInternetReachable] = useState(true);

  useEffect(() => {
    let isUnMounted = false;
    checkConnection();

    return () => {
      isUnMounted = true;
    };
  }, []);

  const checkConnection = async () => {
    const unsubscribe = await NetInfo.addEventListener(state => {
      setisInternetReachable(state.isInternetReachable);
      console.log('isInternetReachable: ', state.isInternetReachable);
    });
  };

  if (isInternetReachable) {
    return null;
  }

  return (
    <Root>
      <ButtonContainer onPress={() => console.log()}>
        <Entypo name="info" size={12} color={'#333'} />
      </ButtonContainer>
      <ETASimpleText size={14} weight="400" color={'#333'} align="center">
        No internet, reconnecting.
      </ETASimpleText>
      <ActivityIndicator size="small" color={'#333'} />
    </Root>
  );
};

export default ETANetInfo;
