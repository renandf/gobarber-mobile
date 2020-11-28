import React, { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  Details,
  DetailsText,
  Button,
  ButtonText,
} from './styles';

interface RouteParams {
  date: string;
  hour: string;
  provider: string;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleButtonPressed = useCallback(() => {
    reset({
      routes: [
        { name: 'Dashboard' }
      ],
      index: 0
    })
  }, [reset]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Appointment booked successfully</Title>

      <Details>
        <Icon name="calendar" size={16} color="#ff9000" />
        <DetailsText>{routeParams.date}</DetailsText>
      </Details>

      <Details>
        <Icon name="clock" size={16} color="#ff9000" />
        <DetailsText>at {routeParams.hour}</DetailsText>
      </Details>

      <Details>
        <Icon name="user" size={16} color="#ff9000" />
        <DetailsText>with {routeParams.provider}</DetailsText>
      </Details>

      <Button onPress={handleButtonPressed}>
        <ButtonText>OK, go back</ButtonText>
      </Button>
    </Container>
  )
}

export default AppointmentCreated;
