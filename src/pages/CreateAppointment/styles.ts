import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Provider } from '../Dashboard/index';

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface HourProps {
  available: boolean;
  selected: boolean;
}

interface HourTextProps {
  selected: boolean;
}

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

export const Content = styled.ScrollView``;

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

export const AvatarPlaceholderSmall = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  border-width: 2px;
  border-color: rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.15);
  justify-content: center;
  align-items: center;
`;

export const AvatarPlaceholderText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  text-transform: uppercase;
`;

export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(
  FlatList as new () => FlatList<Provider>
)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton) <ProviderContainerProps>`
  flex-direction: row;
  align-items: center;
  background: ${props => props.selected ? '#ff9000' : '#3f384f'};
  border-radius: 10px;
  padding: 8px 12px;
  margin-right: 8px;
`;

export const ProviderAvatar = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  border-width: 2px;
  border-color: rgba(255,255,255,0.15);
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: ${props => props.selected ? '#232129' : '#f4ede8'};
  margin-left: 8px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  height: 48px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const OpenDatePickerButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #232129;
`;

export const Calendar = styled.View``;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #999591;
  margin: 0 24px 12px;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled(RectButton) <HourProps>`
  padding: 12px;
  background: ${props => props.selected ? '#ff9000' : '#3e3b47'};
  border-radius: 10px;
  margin-right: 8px;

  opacity: ${(props) => (props.available ? 1 : 0.3)};
`;

export const HourText = styled.Text<HourTextProps>`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: ${props => props.selected ? '#232129' : '#f4ede8'};
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 48px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px 24px;
`;

export const CreateAppointmentButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #232129;
`;

