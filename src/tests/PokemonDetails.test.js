import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testing PokemonDetails Component, Seventh Requirement', () => {
  it('there is a More Details Link in the App Component', () => {
    renderWithRouter(<App />);

    const MoreDetailsLink = screen.getByRole('link', {
      name: 'More details',
    });

    expect(MoreDetailsLink).toBeInTheDocument();
  });

  it('the user is redirected to PokemonsDetails screen', () => {
    const { history } = renderWithRouter(<App />);
    const MoreDetailsLink = screen.getByRole('link', {
      name: 'More details',
    });

    expect(MoreDetailsLink).toBeInTheDocument();

    userEvent.click(MoreDetailsLink);

    const { pathname } = history.location;

    expect(pathname).toBe('/pokemons/25');
  });
});
