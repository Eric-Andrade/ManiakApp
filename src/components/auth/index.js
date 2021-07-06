import React from 'react';
import styled from 'styled-components/native';
import { ETATextInputFilled, ETAButtonFilled, ETASimpleText } from '@etaui';

const Root = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
`;
const HeadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-left: 20px;
  padding-top: 20px;
  background-color: transparent;
`
const FormContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-vertical: 20px;
  background-color: transparent;
`
const TextInputContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
`
const ButtonForgetPasswordContainer = styled.View`
  align-self: flex-end;
  padding: 5px;
  background-color: transparent;
`
const ButtonForgetPassword = styled.TouchableOpacity.attrs({
	underlayColor: 'transparent',
	// hitSlop: {top: 0, bottom: 0, right: 0, left: 0}
})`
	justify-content: center;
	align-items: center;
	z-index: 1;
`
const FooterContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`
const ButtonSignUpContainer = styled.View`
  flex-direction: row;
  align-self: center;
  padding: 5px;
  background-color: transparent;
`
const ButtonSignUp = styled.TouchableOpacity.attrs({
	underlayColor: 'transparent',
	// hitSlop: {top: 0, bottom: 0, right: 0, left: 0}
})`
	justify-content: center;
	align-items: center;
	z-index: 1;
`

const AuthComponent = () => {
  return (
    <Root>
      <HeadContainer>
        <ETASimpleText
          size={24}
          weight='600'
          color='#373a4d'
          align='left'>
            Log In
        </ETASimpleText>
        <ETASimpleText
          size={12}
          weight='100'
          color='#373a4d'
          align='left'>
            Welcome back
        </ETASimpleText>
      </HeadContainer>
      <FormContainer>
        <TextInputContainer>
          <ETASimpleText
            size={12}
            weight='600'
            color='#373a4d'
            align='left'>
              EMAIL
          </ETASimpleText>
          <ETATextInputFilled
            // value={values.fullname}
            placeholder='yourmail@enterprise.com'
            placeholderTextColor='#8f92a9'
            keyboardType='default'
            autoCapitalize='none'
            allowFontScaling
            autoCorrect
            autoFocus
            blurOnSubmit={false}
            caretHidden={false}
            clearButtonMode='while-editing'
            contextMenuHidden={false}
            editable
            enablesReturnKeyAutomatically={false}
            underlineColorAndroid='transparent'
            keyboardAppearance='dark'
            maxLength={10}
            multiline={false}
            numberOfLines={1} // android
            returnKeyLabel='next' // android
            secureTextEntry={false} // password
            spellCheck
            textContentType='none'
            returnKeyType='next'
            textsize={14}
            height={45}
            width={320}
            borderWidth={0.3}
            // onChangeText={handleChange(
            //   'fullname',
            // )}
            // onBlur={handleBlur('fullname')}
            selectionColor='#373a4d'
          />
        </TextInputContainer>
        <TextInputContainer>
          <ETASimpleText
            size={12}
            weight='600'
            color='#373a4d'
            align='left'>
              PASSWORD
          </ETASimpleText>
          <ETATextInputFilled
            // value={values.fullname}
            placeholder='password'
            placeholderTextColor='#8f92a9'
            keyboardType='default'
            autoCapitalize='none'
            allowFontScaling
            autoCorrect
            autoFocus
            blurOnSubmit={false}
            caretHidden={false}
            clearButtonMode='while-editing'
            contextMenuHidden={false}
            editable
            enablesReturnKeyAutomatically={false}
            underlineColorAndroid='transparent'
            keyboardAppearance='dark'
            maxLength={10}
            multiline={false}
            numberOfLines={1} // android
            returnKeyLabel='next' // android
            secureTextEntry={true} // password
            spellCheck
            textContentType='none'
            returnKeyType='next'
            textsize={14}
            height={45}
            width={320}
            borderWidth={0.3}
            borderradius={0}
            // onChangeText={handleChange(
            //   'fullname',
            // )}
            // onBlur={handleBlur('fullname')}
            selectionColor='#373a4d'
          />
        <ButtonForgetPasswordContainer>
          <ButtonForgetPassword
            // onPress={() => _onShowForgetPasswordPress()}
          >
            <ETASimpleText
              size={13}
              weight='400'
              color='#373a4d'
              align='left'>
              Forgot Password
            </ETASimpleText>
          </ButtonForgetPassword>
        </ButtonForgetPasswordContainer>
        </TextInputContainer>
        <ETAButtonFilled
          title='LOG IN'
          // onPress={() => _navigateGetUsers()}
          colorButton='#373a4d'
          padding={15}
          width={320}
          height={45}
          borderRadius={2}
          borderWidth={0.5}
        />
      </FormContainer>
      <FooterContainer>
        <ButtonSignUpContainer>
          <ETASimpleText
            size={13}
            weight='400'
            color='#373a4d'
            align='left'>
            Don't have an account? {' '}
          </ETASimpleText>
          <ButtonSignUp
            // onPress={() => _onShowSignUpPress()}
          >
            <ETASimpleText
              size={13}
              weight='bold'
              color='#373a4d'
              align='left'>
              Sign up here
            </ETASimpleText>
          </ButtonSignUp>
        </ButtonSignUpContainer>
      </FooterContainer>
    </Root>
  );
};

export default AuthComponent
