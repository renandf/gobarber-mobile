import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  UserAvatar,
  AvatarPlaceholder,
  AvatarPlaceholderText,
} from './styles';

interface RouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const { goBack } = useNavigation();
  const { providerId } = route.params as RouteParams;

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="rgba(255,255,255,0.5)" />
        </BackButton>

        <HeaderTitle>Barbers</HeaderTitle>

        {user.avatar_url
          ? <UserAvatar source={{ uri: user.avatar_url }} />
          : <AvatarPlaceholder>
            <AvatarPlaceholderText>
              {user.name.charAt(0)}
            </AvatarPlaceholderText>
          </AvatarPlaceholder>
        }
      </Header>
    </Container>
  )
}

export default CreateAppointment;
