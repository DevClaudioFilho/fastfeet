import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width:335px;
  height:45px;
  border-radius: 4px;
  background: #7D40E7;
  align-items:center;
  justify-content:center;
`;

export const Text = styled.Text`
  color:#fff;
  font-weight:bold;
  font-size: 16px;
`;

