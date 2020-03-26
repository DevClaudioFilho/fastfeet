import React from 'react';
import { Image, StyleSheet } from 'react-native';

import test from '../../assets/fastfeet-logo.svg'

import { Container, Form, FormInput, SubmitButton} from './styles';

export default function Login() {

  return (
    <Container>
      <Image source={test}/>
      <Form>
        <FormInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Informe seu ID de cadastro"
        />
        <SubmitButton onPress={()=> {}}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
