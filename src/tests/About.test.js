import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../components/About';

describe('Testing About Component, Requirement 2', () => {
  it('tests if there is a level 2 heading with the "About Pokédex" text in the document',
    () => {
      const { getByRole, getByText } = render(
        <MemoryRouter>
          <About />
        </MemoryRouter>,
      );
      const heading = getByRole('heading', { level: 2 });
      const headingText = getByText(/About Pokédex/);

      expect(heading).toBeInTheDocument();
      expect(heading).toBe(headingText);
    });

  it('tests if the first and second paragraph are about Pokédex',
    () => {
      const { getAllByText } = render(
        <MemoryRouter>
          <About />
        </MemoryRouter>,
      );
      const firstParagraph = getAllByText(/Pokémons/)[0];
      const secondParagraph = getAllByText(/Pokémons/)[1];

      expect(firstParagraph).toBeInTheDocument();
      expect(secondParagraph).toBeInTheDocument();
    });

  it('tests if the image have the appropriate source',
    () => {
      const { getByAltText } = render(
        <MemoryRouter>
          <About />
        </MemoryRouter>,
      );
      const imageAlt = getByAltText('Pokédex');

      expect(imageAlt).toBeInTheDocument();
      expect(imageAlt).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    });
});
