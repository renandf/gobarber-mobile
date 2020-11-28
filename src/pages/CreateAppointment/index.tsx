import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { Provider } from '../Dashboard/index';

import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  UserAvatar,
  AvatarPlaceholder,
  AvatarPlaceholderSmall,
  AvatarPlaceholderText,
  ProvidersListContainer,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
} from './styles';

interface RouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const { goBack } = useNavigation();
  const routeParams = route.params as RouteParams;

  const [providers, setProviders] = useState<Provider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState(routeParams.providerId);

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSelectProvider = useCallback((providerId: string) => {
    setSelectedProvider(providerId);
  }, [])

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

      <ProvidersListContainer>
        <ProvidersList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={providers}
          keyExtractor={provider => provider.id}
          renderItem={({ item: provider }) => (
            <ProviderContainer
              onPress={() => handleSelectProvider(provider.id)}
              selected={provider.id === selectedProvider}
            >
              {
                provider.avatar_url
                  ? <ProviderAvatar source={{ uri: provider.avatar_url }} />
                  : <AvatarPlaceholderSmall>
                    <AvatarPlaceholderText>
                      {provider.name.charAt(0)}
                    </AvatarPlaceholderText>
                  </AvatarPlaceholderSmall>
              }
              <ProviderName selected={provider.id === selectedProvider}>
                {provider.name}
              </ProviderName>
            </ProviderContainer>
          )}
        />
      </ProvidersListContainer>

    </Container>
  )
}

export default CreateAppointment;
