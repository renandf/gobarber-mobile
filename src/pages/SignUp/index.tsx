import React, { useRef, useCallback } from 'react';
import {
  View,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png'

import { Container, Title, LinkToLogin, LinkToLoginText } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required').email('Please insert a valid email'),
        password: Yup.string().min(6, 'Minimum 6 characters')
      });

      await schema.validate(data, { abortEarly: false });

      await api.post('/users', data);

      Alert.alert(
        'Registration successful!',
        "You're ready to log into GoBarber."
      );

      navigation.goBack()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        Alert.alert(
          'Something missing or invalid',
          'Please make sure to complete all required fields with valid information.'
        );

        return;
      }

      Alert.alert(
        'Registration error',
        'Something went wrong. Please try to register again.'
      );
    }
  }, [navigation]);

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

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                name="name"
                icon="user"
                placeholder="Name"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
              />
              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Password"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button onPress={() => {
                formRef.current?.submitForm();
              }}>Register</Button>
            </Form>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <LinkToLogin onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#ff9000" />
        <LinkToLoginText>Back to login</LinkToLoginText>
      </LinkToLogin>
    </>
  )

}

export default SignUp;
