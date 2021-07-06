import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {ETASimpleText} from '@etaui';

const Root = styled.View`
  margin-vertical: 5px;
  padding-horizontal: 10px;
`;
const Touchable = styled.TouchableOpacity.attrs({
  underlayColor: 'transparent',
  hitSlop: {top: 0, bottom: 0, right: 0, left: 0},
})`
  height: 25px;
  justify-content: center;
`;

const ETAButtonOutline = ({
  title,
  onPress,
  disabled,
  colorButton,
  align,
  padding,
  borderRadius,
  width,
  borderWidth,
}) => {
  return (
    <>
      <Root>
        <Touchable
          style={{
            width,
            backgroundColor: 'transparent',
            borderColor: colorButton,
            borderWidth: borderWidth ? borderWidth : 1,
            paddingLeft: padding || 20,
            paddingRight: padding || 20,
            borderRadius,
          }}
          onPress={onPress}
          disabled={disabled || false}>
          {disabled ? (
            <ActivityIndicator
              color={colorButton === 'white' ? '#333' : 'white'}
            />
          ) : (
            <ETASimpleText
              size={13}
              weight="400"
              color={
                colorButton === 'white'
                  ? 'gray'
                  : disabled
                  ? '#fff'
                  : colorButton
              }
              align={align}>
              {title || 'Text'}
            </ETASimpleText>
          )}
        </Touchable>
      </Root>
    </>
  );
};

export default React.memo(ETAButtonOutline);
