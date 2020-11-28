import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 32px;
  color: #f4ede8;
  margin: 32px 0;
  text-align: center;
`;

export const Details = styled.View`
  margin-bottom: 8px;
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const DetailsText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #999591;
  margin-left: 8px;
`;

export const Button = styled(RectButton)`
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 32px;
  padding: 12px 24px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #232129;
`;
