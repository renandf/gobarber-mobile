import React from 'react';
import { render } from 'react-native-testing-library';

import Login from '../../pages/Login';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('Login page', () => {
  it('should contain email/password inputs', () => {
    const { getByPlaceholder } = render(<Login />);

    expect(getByPlaceholder('Email')).toBeTruthy();
    expect(getByPlaceholder('Password')).toBeTruthy();
  });
});
