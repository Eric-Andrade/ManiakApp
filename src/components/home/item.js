import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {ETASimpleText} from '@etaui';
import { truncateString } from '@functions'

const Root = styled.View`
  height: 80px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-color: #f5f6f8;
  border-bottom-width: 1px;
`;
const Photo = styled.Image`
  height: 55px;
  width: 55px;
  border-radius: 10px;
`;
const InformationContainer = styled.View`
  height: 40px;
  width: 100%;
  flex-direction: column;
  padding-horizontal: 5px;
  background-color: transparent;
`

const UsersItemComponent = ({ title, image, description }) => {
  return (
    <Root>
      <Photo 
        source={{ uri: image }}
      />
      <InformationContainer>
        <ETASimpleText
          size={14}
          weight='800'
          color="#373a4d"
          align="left">
          {title}
        </ETASimpleText>
        <ETASimpleText
          size={12}
          weight='400'
          color="#373a4d"
          align="left">
          {truncateString(description, 50)}
        </ETASimpleText>
      </InformationContainer>
    </Root>
  );
};

export default UsersItemComponent;
