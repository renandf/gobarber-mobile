import React from 'react';
import { View, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png'

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccount, CreateAccountText } from './styles';

const Login: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Welcome back!</Title>
            </View>

            <Input name="email" icon="mail" placeholder="Email" />
            <Input name="password" icon="lock" placeholder="Password" />

            <Button onPress={() => { console.log('foi') }}>Log in</Button>

            <ForgotPassword onPress={() => { }}>
              <ForgotPasswordText>Forgot password</ForgotPasswordText>
            </ForgotPassword>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccount onPress={() => { }}>
        <CreateAccountText>First timer? Sign up!</CreateAccountText>
      </CreateAccount>
    </>
  )

}

export default Login;
