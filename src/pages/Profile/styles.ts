import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 32px ${Platform.OS === 'android' ? 150 : 80}px;
`;

export const Nav = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const SignOutButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #f4ede8;
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 8px;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-width: 2px;
  border-color: #3f384f;
`;

export const AvatarPlaceholder = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-width: 2px;
  border-color: #3f384f;
  background: #3f384f;
  justify-content: center;
  align-items: center;
`;

