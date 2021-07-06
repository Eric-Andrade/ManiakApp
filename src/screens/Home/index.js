import React from 'react';
import styled from 'styled-components/native';
import HomeComponent from '@components/home';

const Root = styled.View`
  flex: 1;
  background-color: #fff;
`;

const HomeScreen = () => {
  return (
    <Root>
      <HomeComponent />
    </Root>
  );
};

export default React.memo(HomeScreen);
