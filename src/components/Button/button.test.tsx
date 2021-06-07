import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from './Button';

it('should show label', () => {
  const AppButton = (
    <Button label="Button" onPress={() => true} type="primary" />
  );

  const { getAllByText } = render(AppButton);

  const label = getAllByText('Button');

  expect(label).toBe(true);
});
