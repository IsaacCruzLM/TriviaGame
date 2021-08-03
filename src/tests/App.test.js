import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test(' E AO TOPO VAMOS SUBIR!', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/SUA VEZ/i);
  expect(linkElement).toBeInTheDocument();
});
