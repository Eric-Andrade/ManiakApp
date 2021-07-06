import React from 'react';
import styled from 'styled-components/native';
import AuthComponent from '@components/auth';

const Root = styled.View`
  flex: 1;
  background-color: #fff;
`;

const AuthScreen = () => {
  return (
    <Root>
      <AuthComponent />
    </Root>
  );
};

export default React.memo(AuthScreen)
