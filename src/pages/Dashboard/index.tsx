import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  AvatarPlaceholder,
  AvatarPlaceholderText,
  ProvidersList,
  ProvidersListHeader,
  ProvidersListTitle,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  const { user } = useAuth();
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  const navigateToCreateAppointment = useCallback((providerId: string) => {
    navigate('CreateAppointment', { providerId })
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Welcome, {"\n"}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          {user.avatar_url
            ? <UserAvatar source={{ uri: user.avatar_url }} />
            : <AvatarPlaceholder>
              <AvatarPlaceholderText>
                {user.name.charAt(0)}
              </AvatarPlaceholderText>
            </AvatarPlaceholder>
          }
        </ProfileButton>
      </Header>

      <ProvidersList
        data={providers}
        keyExtractor={provider => provider.id}
        ListHeaderComponent={
          <ProvidersListHeader>
            <ProvidersListTitle>Barbers</ProvidersListTitle>
            <ProviderMeta>
              <Icon name="calendar" size={14} color="#ff9000" />
              <ProviderMetaText>Monday to Friday</ProviderMetaText>
            </ProviderMeta>

            <ProviderMeta>
              <Icon name="clock" size={14} color="#ff9000" />
              <ProviderMetaText>Between 8:00 and 18:00</ProviderMetaText>
            </ProviderMeta>
          </ ProvidersListHeader>
        }
        renderItem={({ item: provider }) => (
          <ProviderContainer onPress={
            () => navigateToCreateAppointment(provider.id)
          } >
            {
              provider.avatar_url
                ? <ProviderAvatar source={{ uri: provider.avatar_url }} />
                : <AvatarPlaceholder>
                  <AvatarPlaceholderText>
                    {provider.name.charAt(0)}
                  </AvatarPlaceholderText>
                </AvatarPlaceholder>
            }

            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>
            </ProviderInfo>
          </ProviderContainer>
        )
        }
      />
    </Container >
  )
}

export default Dashboard;
