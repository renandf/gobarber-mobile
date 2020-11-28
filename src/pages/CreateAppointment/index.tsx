import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Platform, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { Provider } from '../Dashboard/index';

import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  UserAvatar,
  Content,
  AvatarPlaceholder,
  AvatarPlaceholderSmall,
  AvatarPlaceholderText,
  ProvidersListContainer,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
  Calendar,
  Schedule,
  Section,
  SectionTitle,
  SectionContent,
  Hour,
  HourText,
  CreateAppointmentButton,
  CreateAppointmentButtonText,
} from './styles';

interface RouteParams {
  providerId: string;
}

interface AvailabilityItem {
  hour: number;
  available: boolean;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const { goBack, navigate } = useNavigation();
  const routeParams = route.params as RouteParams;

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(0);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [selectedProvider, setSelectedProvider] = useState(routeParams.providerId);
  const [availability, setAvailability] = useState<AvailabilityItem[]>([]);

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  useEffect(() => {
    api.get(`providers/${selectedProvider}/day-availability`, {
      params: {
        year: selectedDate.getFullYear(),
        month: selectedDate.getMonth() + 1,
        day: selectedDate.getDate(),
      }
    }).then(response => {
      setAvailability(response.data)
    })
  }, [selectedDate, selectedProvider]);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSelectProvider = useCallback((providerId: string) => {
    setSelectedProvider(providerId);
  }, [])

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker(state => !state)
  }, []);

  const handleDateChanged = useCallback((event: any, date: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (date) {
      setSelectedDate(date);
    }
  }, []);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "dd MMM yyyy")
  }, [selectedDate]);

  const morningAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour < 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        };
      });
  }, [availability]);

  const afternoonAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => hour >= 12)
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), 'HH:00'),
        };
      });
  }, [availability]);

  const handleSelectHour = useCallback((hour: number) => {
    setSelectedHour(hour)
  }, []);

  const selectedHourAsText = useMemo(() => {
    return format(new Date().setHours(selectedHour), 'HH:00')
  }, [selectedHour]);

  const handleCreateAppointment = useCallback(async () => {
    try {
      const provider = providers.find(
        provider => provider.id === selectedProvider
      );
      const date = new Date(selectedDate);

      date.setHours(selectedHour);
      date.setMinutes(0);

      const dateFormatted = format(date, "EEEE', 'dd MMM yyyy");

      await api.post('appointments', {
        provider_id: selectedProvider,
        date,
      });

      navigate('AppointmentCreated', {
        date: dateFormatted,
        hour: selectedHourAsText,
        provider: provider?.name,

      })
    } catch (err) {
      Alert.alert(
        'Something went wrong.',
        'There was an error while booking your appointment, please try again later.'
      )
    }
  }, [
    navigate,
    selectedDate,
    selectedDateAsText,
    selectedHour,
    selectedHourAsText,
    selectedProvider,
  ]);

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

      <Content>
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

        <Calendar>
          <OpenDatePickerButton onPress={handleToggleDatePicker}>
            <OpenDatePickerButtonText>Date: {selectedDateAsText}</OpenDatePickerButtonText>
          </OpenDatePickerButton>

          {showDatePicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={selectedDate}
              onChange={handleDateChanged}
              textColor="#f4ede8"
            />
          )}
        </Calendar>

        <Schedule>
          <Section>
            <SectionTitle>Morning (select a time)</SectionTitle>

            <SectionContent>
              {morningAvailability.map(({
                hourFormatted, hour, available
              }) => (
                  <Hour
                    available={available}
                    enabled={available}
                    selected={selectedHour === hour}
                    key={hourFormatted}
                    onPress={() => handleSelectHour(hour)}
                  >
                    <HourText selected={selectedHour === hour}>
                      {hourFormatted}
                    </HourText>
                  </Hour>
                ))}
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Afternoon (select a time)</SectionTitle>

            <SectionContent>
              {afternoonAvailability.map(({
                hourFormatted, hour, available
              }) => (
                  <Hour
                    available={available}
                    enabled={available}
                    selected={selectedHour === hour}
                    key={hourFormatted}
                    onPress={() => handleSelectHour(hour)}
                  >
                    <HourText selected={selectedHour === hour}>
                      {hourFormatted}
                    </HourText>
                  </Hour>
                ))}
            </SectionContent>
          </Section>
        </Schedule>

        {!!selectedHour &&
          <CreateAppointmentButton onPress={handleCreateAppointment}>
            <CreateAppointmentButtonText>
              Book {selectedHourAsText} on {selectedDateAsText}
            </CreateAppointmentButtonText>
          </CreateAppointmentButton>
        }

      </Content>
    </Container>
  )
}

export default CreateAppointment;
