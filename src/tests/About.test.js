import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../components/About';

describe('Testing About Component, Requirement 2', () => {
  test('', () => {
    const { getByRole, getAllByText, getByAltText } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    const heading = getByRole('heading', { level: 2 });
    const firstParagraph = getAllByText(/Pokémons/)[0];
    const secondParagraph = getAllByText(/Pokémons/)[1];
    const imageAlt = getByAltText('Pokédex');
    expect(heading).toBeInTheDocument();
    expect(imageAlt).toBeInTheDocument();
    expect(imageAlt).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();
  });
});
