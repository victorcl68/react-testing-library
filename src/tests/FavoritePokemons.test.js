import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Testing FavoritePokemons Component, Third Requirement', () => {
  it('tests if there are no favorite pokemon, "No favorite pokemon found" is shown',
    () => {
      const { getByText } = render(
        <MemoryRouter>
          <FavoritePokemons />
        </MemoryRouter>,
      );
      const noPokemonMessage = getByText(/No favorite pokemon found/);
      expect(noPokemonMessage).toBeInTheDocument();
    });
});
