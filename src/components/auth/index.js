import React, { useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import {SIGNIN} from '@redux/user/actions';
import { ETATextInputFilled, ETAButtonFilled, ETASimpleText } from '@etaui';
import {FontAwesome} from '@icons';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .email('Please enter a valid email.')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Password is required.')
});

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
`;
const FormContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-vertical: 20px;
  background-color: transparent;
`;
const TextInputContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
`;
const ForgetPasswordContainerButton = styled.View`
  align-self: flex-end;
  padding: 5px;
  background-color: transparent;
`;
const ForgetPasswordButton = styled.TouchableOpacity.attrs({
	underlayColor: 'transparent',
	// hitSlop: {top: 0, bottom: 0, right: 0, left: 0}
})`
	justify-content: center;
	align-items: center;
	z-index: 1;
`;
const FooterContainer = styled.View`
  flex: 0.6;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`
const SignUpContainerButton = styled.View`
  flex-direction: row;
  width: 100%;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: transparent;
`;
const SignUpButton = styled.TouchableOpacity.attrs({
	underlayColor: 'transparent',
	// hitSlop: {top: 0, bottom: 0, right: 0, left: 0}
})`
	justify-content: center;
	align-items: center;
	z-index: 1;
`;
const PasswordToogleButton = styled.TouchableOpacity.attrs({
	underlayColor: 'transparent',
	// hitSlop: {top: 0, bottom: 0, right: 0, left: 0}
})`
	justify-content: center;
	align-items: center;
	z-index: 1;
`;

const mapStateToProps = (state, props) => {
  const {data} = state.user;
  return {data};
};

const mapDispatchProps = (dispatch, props) => ({
  singinUser: ({ username, password}) => {
    dispatch({
      type: SIGNIN,
      payload: {
        username, 
        password
      },
    });
  },
});

const AuthComponent = ({singinUser, data}) => {
  const [ passwordToogle, setpasswordToogle ] = useState(true)

  useEffect(() => {
    setpasswordToogle(true)
  }, [])

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
        <Formik
          enableReinitialize={true}
          initialValues = {{
            username: 'challenge@maniak.co',
            password: 'maniak2020'
          }}
          onSubmit={(values, actions) => {
            singinUser({
              username: values.username,
              password: values.password,
            })
          }}
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
            errors,
            setFieldValue,
            touched
          }) => (
          <>
            <TextInputContainer>
              <ETASimpleText
                size={12}
                weight='600'
                color='#373a4d'
                align='left'>
                  EMAIL
              </ETASimpleText>
              <ETATextInputFilled
                value={values.username}
                placeholder='myemail@enterprise.com'
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
                maxLength={100}
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
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                selectionColor='#373a4d'
              />
              {touched.username && errors.username ? (
                <ETASimpleText
                  size={10}
                  weight='400'
                  color='#d9372b'
                  align='center'>
                  {errors.username}
                </ETASimpleText>
              ) : null}
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
                value={values.password}
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
                maxLength={100}
                multiline={false}
                numberOfLines={1} // android
                returnKeyLabel='next' // android
                secureTextEntry={passwordToogle} // password
                spellCheck
                textContentType='none'
                returnKeyType='next'
                textsize={14}
                height={45}
                width={320}
                borderWidth={0.3}
                borderradius={0}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                selectionColor='#373a4d'
                rightIcon={
                  <PasswordToogleButton
                    onPress={() => setpasswordToogle(!passwordToogle)}
                  >
                    <FontAwesome
                      name={passwordToogle ? 'eye' : 'eye-slash'}
                      size={20}
                      color='#333'
                    />
                  </PasswordToogleButton>
                }
              />
              {touched.password && errors.password ? (
                <ETASimpleText
                  size={10}
                  weight='400'
                  color='#d9372b'
                  align='center'>
                  {errors.password}
                </ETASimpleText>
              ) : null}
            <ForgetPasswordContainerButton>
              <ForgetPasswordButton
                // onPress={() => _onShowForgetPasswordPress()}
              >
                <ETASimpleText
                  size={13}
                  weight='400'
                  color='#373a4d'
                  align='left'>
                  Forgot Password
                </ETASimpleText>
              </ForgetPasswordButton>
            </ForgetPasswordContainerButton>
            </TextInputContainer>
            <ETAButtonFilled
              title='LOG IN'
              onPress={handleSubmit}
              colorButton='#373a4d'
              padding={15}
              width={320}
              height={45}
              borderRadius={2}
              borderWidth={0.5}
            />
            </>
          )}
        </Formik>
      </FormContainer>
      <FooterContainer>
        <SignUpContainerButton>
          <ETASimpleText
            size={13}
            weight='400'
            color='#373a4d'
            align='center'>
            Don't have an account? {' '}
          </ETASimpleText>
          <SignUpButton
            // onPress={() => _onShowSignUpPress()}
          >
            <ETASimpleText
              size={13}
              weight='bold'
              color='#373a4d'
              align='center'>
              Sign up here
            </ETASimpleText>
          </SignUpButton>
        </SignUpContainerButton>
      </FooterContainer>
    </Root>
  );
};

const AuthComponentConnect = connect(
  mapStateToProps,
  mapDispatchProps,
)(AuthComponent);

export default AuthComponentConnect;
