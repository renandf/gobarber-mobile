import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #28262e;
  border-bottom-width: 1px;
  border-bottom-color: #3f384f;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  margin-left: 16px;
  margin-right: auto;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #f4ede8;
`;

export const BackButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 29px;
  border-width: 2px;
  border-color: #3f384f;
`;

export const AvatarPlaceholder = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 29px;
  border-width: 2px;
  border-color: #3f384f;
  background: rgba(255,255,255,0.15);
  justify-content: center;
  align-items: center;
`;

export const AvatarPlaceholderText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  text-transform: uppercase;
`;

