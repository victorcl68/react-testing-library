import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Testing FavoritePokemons Component, Third Requirement', () => {
  it('there are no favorite pokemon, "No favorite pokemon found" is shown',
    () => {
      render(
        <MemoryRouter>
          <FavoritePokemons />
        </MemoryRouter>,
      );

      expect(screen.getByText('No favorite pokemon found')).toBeInTheDocument();
    });
});
