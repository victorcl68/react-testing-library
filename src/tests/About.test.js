import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../components/About';

describe('Testing About Component, Requirement 2', () => {
  test('', () => {
    const { getByRole, getAllByText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    const heading = getByRole('heading', { level: 2 });
    const firstParagraph = getAllByText(/Pokémons/)[0];
    const secondParagraph = getAllByText(/Pokémons/)[1];
    expect(heading).toBeInTheDocument();
    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();
  });
});
