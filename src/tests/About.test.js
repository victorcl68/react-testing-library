import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../components/About';

describe('Testing About Component, Requirement 2', () => {
  test('', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    const heading = getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });
});
