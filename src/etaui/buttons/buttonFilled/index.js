import React from 'react';
import styled from 'styled-components/native';
import {ETASimpleText} from '@etaui';

const Root = styled.View`
  margin-vertical: 5px;
  padding-horizontal: 10px;
  z-index: 1000
`;
const Touchable = styled.TouchableOpacity.attrs({
  underlayColor: 'transparent',
  hitSlop: {top: 0, bottom: 0, right: 0, left: 0},
})`
  height: ${props => (props.height ? props.height : 30)}px;
  justify-content: center;
`;

const ETAButtonFilled = ({
  title,
  onPress,
  disabled,
  colorButton,
  align,
  padding,
  borderRadius,
  width,
  height
}) => {
  // const themeContext = useContext(ThemeContext)

  return (
    <>
      <Root>
        <Touchable
          style={{
            height,
            width,
            backgroundColor: disabled ? '#888' : colorButton,
            paddingLeft: padding || 20,
            paddingRight: padding || 20,
            borderRadius,
          }}
          onPress={onPress}
          disabled={disabled || false}>
          <ETASimpleText
            size={13}
            weight='bold'
            // color={
            // 	colorButton === 'white'
            // 		? 'gray'
            // 		: 'white'
            // }
            color={
              disabled ? '#eee' : colorButton === 'white' ? '#333' : 'white'
            }
            align={align}>
            {title || 'Text'}
          </ETASimpleText>
        </Touchable>
      </Root>
    </>
  );
};

export default React.memo(ETAButtonFilled);
