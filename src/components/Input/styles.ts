import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  hasError: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 60px;
  margin-bottom: 8px;
  padding: 0 16px;
  background: #232129;
  border-width: 2px;
  border-color: #232129;
  border-radius: 8px;

  ${props => props.hasError && css`
    border-color: #c53030;
  `}

  ${props => props.isFocused && css`
    border-color: #ff9000;
  `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
