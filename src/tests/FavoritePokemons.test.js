import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Testing FavoritePokemons Component, Third Requirement', () => {
  it('tests if there are no favorite pokemon, "No favorite pokemon found" is shown',
    () => {
      const { getByText } = render(
        <MemoryRouter>
          <FavoritePokemons />
        </MemoryRouter>,
      );
      const noFavoriteMessage = getByText(/No favorite pokemon found/);

      expect(noFavoriteMessage).toBeInTheDocument();
    });
});
