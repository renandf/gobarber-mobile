import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  Details,
  DetailsText,
  Button,
  ButtonText,
} from './styles';

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();

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
        <DetailsText>Friday, 1 Dec 2020</DetailsText>
      </Details>

      <Details>
        <Icon name="clock" size={16} color="#ff9000" />
        <DetailsText>at 12:00</DetailsText>
      </Details>

      <Details>
        <Icon name="user" size={16} color="#ff9000" />
        <DetailsText>with Diego Fernandes Testando Nome</DetailsText>
      </Details>

      <Button onPress={handleButtonPressed}>
        <ButtonText>OK, go back</ButtonText>
      </Button>
    </Container>
  )
}

export default AppointmentCreated;
