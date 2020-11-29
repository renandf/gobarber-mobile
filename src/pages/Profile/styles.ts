import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 32px ${Platform.OS === 'android' ? 150 : 80}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #f4ede8;
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 8px;
`;

export const UserAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-width: 2px;
  border-color: #3f384f;
  align-self: center;
`;

export const AvatarPlaceholder = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-width: 2px;
  border-color: #3f384f;
  background: rgba(255,255,255,0.15);
  justify-content: center;
  align-items: center;
`;

export const AvatarPlaceholderText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 20px;
  color: #f4ede8;
  text-transform: uppercase;
`;
