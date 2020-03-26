import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS ==='ios',
  behavior:'padding',
})`
  flex:1;
  justify-content:center;
  align-items:center;
  background:#7D40E7;
`;

export const Form = styled.View`
  margin:auto;
  align-self:stretch;
  margin-top:50px;
`;

export const FormInput = styled(Input)`
  margin-bottom:10px;
`;

export const SubmitButton = styled(Button)`
  background:#82BF18;
  margin-top:5px;
`;
