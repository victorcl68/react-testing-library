import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { /* render , */ screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testing PokemonDetails Component, Seventh Requirement', () => {
  describe('Detailed information for the selected Pokémon is shown on the screen', () => {
    const MoreDetails = 'More details';
    it('there is a More Details Link in the App Component', () => {
      renderWithRouter(<App />);

      const MoreDetailsLink = screen.getByRole('link', {
        name: MoreDetails,
      });

      expect(MoreDetailsLink).toBeInTheDocument();
    });

    it('the user is redirected to Pokemons Details screen', () => {
      const { history } = renderWithRouter(<App />);
      const MoreDetailsLink = screen.getByRole('link', {
        name: MoreDetails,
      });

      expect(MoreDetailsLink).toBeInTheDocument();

      userEvent.click(MoreDetailsLink);

      const { pathname } = history.location;

      expect(pathname).toBe('/pokemons/25');
    });

    it('detailed information for the selected Pokémon is shown on the screen', () => {
      const { history } = renderWithRouter(<App />);
      const MoreDetailsLink = screen.getByRole('link', {
        name: MoreDetails,
      });

      expect(MoreDetailsLink).toBeInTheDocument();

      userEvent.click(MoreDetailsLink);

      const { pathname } = history.location;
      expect(pathname).toBe('/pokemons/25');

      expect(screen.getByRole('heading', {
        level: 2,
        name: 'Pikachu Details',
      })).toBeInTheDocument();

      expect(MoreDetailsLink).not.toBeInTheDocument();

      expect(screen.getByRole('heading', {
        level: 2,
        name: 'Summary',
      }));

      expect(screen.getByText(/This intelligent Pokémon/));
    });
  });
});
