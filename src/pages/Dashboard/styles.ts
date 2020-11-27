import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Provider } from './index';

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
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  line-height: 24px;
  color: #f4ede8;
`;

export const UserName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #ff9900;
`;

export const ProfileButton = styled.TouchableOpacity``;

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

export const ProvidersList = styled(
  FlatList as new () => FlatList<Provider>
)`
  padding: 32px 24px 16px;
`;

export const ProvidersListTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #f4ede8;
  margin-bottom: 24px;
`;

export const ProviderContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background: #3f384f;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const ProviderAvatar = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 29px;
  border-width: 2px;
  border-color: #3f384f;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
`;

export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const ProviderMetaText = styled.Text`
  margin-left: 8px;
  font-family: 'RobotoSlab-Regular';
  color: rgba(255,255,255,0.5);
`;
