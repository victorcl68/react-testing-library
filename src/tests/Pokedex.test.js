import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testing Pokedex Component, Fifth Requirement', () => {
  const proximoPokemon = 'Próximo pokémon';
  const EncounteredPokemons = 'Encountered pokémons';
  it('There is a hh2 title with the "Encountered pokémons" text', () => {
    renderWithRouter(<App />);
    const EncounteredPokemonsLink = screen.getByRole('heading', {
      level: 2,
      name: EncounteredPokemons,
    });

    expect(EncounteredPokemonsLink).toBeInTheDocument();
  });
  it('the button has a text "Próximo pokémon"', () => {
    renderWithRouter(<App />);
    const buttonNextPokemon = screen.getByRole('link', {
      name: proximoPokemon,
    });

    expect(buttonNextPokemon).toBeInTheDocument();
  });
  it('the button has a text "Próximo pokémon"', () => {
    renderWithRouter(<App />);
    const buttonNextPokemon = screen.getByRole('link', {
      name: proximoPokemon,
    });

    expect(buttonNextPokemon).toBeInTheDocument();

    userEvent.click(buttonNextPokemon);
    const Charmander = screen.getByText('Charmander');
    expect(Charmander).toBeInTheDocument();

    userEvent.click(buttonNextPokemon);
    const Caterpie = screen.getByText('Caterpie');
    expect(Caterpie).toBeInTheDocument();

    userEvent.click(buttonNextPokemon);
    const Ekans = screen.getByText('Ekans');
    expect(Ekans).toBeInTheDocument();

    userEvent.click(buttonNextPokemon);
    const Alakazam = screen.getByText('Alakazam');
    expect(Alakazam).toBeInTheDocument();

    userEvent.click(buttonNextPokemon);
    const Mew = screen.getByText('Mew');
    expect(Mew).toBeInTheDocument();

    userEvent.click(buttonNextPokemon);
    const Rapidash = screen.getByText('Rapidash');
    expect(Rapidash).toBeInTheDocument();

    userEvent.click(buttonNextPokemon);
    const Snorlax = screen.getByText('Snorlax');
    expect(Snorlax).toBeInTheDocument();

    userEvent.click(buttonNextPokemon);
    const Dragonair = screen.getByText('Dragonair');
    expect(Dragonair).toBeInTheDocument();

    userEvent.click(buttonNextPokemon);
    const Pikachu = screen.getByText('Pikachu');
    expect(Pikachu).toBeInTheDocument();
  });
  it('The filter button works', () => {
    renderWithRouter(<App />);
    const buttonType = screen.getByRole('link', {
      name: 'Fire',
    });

    expect(buttonType).toBeInTheDocument();
    userEvent.click(buttonType);

    const Charmander = screen.getByText('Charmander');
    expect(Charmander).toBeInTheDocument();

    const buttonNextPokemon = screen.getByRole('link', {
      name: proximoPokemon,
    });

    expect(buttonNextPokemon).toBeInTheDocument();

    userEvent.click(buttonNextPokemon);

    const Rapidash = screen.getByText('Rapidash');
    expect(Rapidash).toBeInTheDocument();
  });
  it('The reset filter button works', () => {
    renderWithRouter(<App />);
    const buttonTypeAll = screen.getByRole('link', {
      name: 'All',
    });

    expect(buttonTypeAll).toBeInTheDocument();
    userEvent.click(buttonTypeAll);

    const Pikachu = screen.getByText('Pikachu');
    expect(Pikachu).toBeInTheDocument();

    const buttonNextPokemon = screen.getByRole('link', {
      name: proximoPokemon,
    });

    expect(buttonNextPokemon).toBeInTheDocument();

    userEvent.click(buttonNextPokemon);
    const Charmander = screen.getByText('Charmander');
    expect(Charmander).toBeInTheDocument();
  });
  it('The reset filter button works', () => {
    renderWithRouter(<App />);
    const buttonTypeAll = screen.getByRole('link', {
      name: 'All',
    });
    const buttonTypeFire = screen.getByRole('link', {
      name: 'Fire',
    });
    const buttonTypeEletric = screen.getByRole('link', {
      name: 'Eletric',
    });
    const buttonTypeBug = screen.getByRole('link', {
      name: 'Bug',
    });
    const buttonTypePoison = screen.getByRole('link', {
      name: 'Poison',
    });
    const buttonTypePsychic = screen.getByRole('link', {
      name: 'Psychic',
    });
    const buttonTypeNormal = screen.getByRole('link', {
      name: 'Normal',
    });
    const buttonTypeDragon = screen.getByRole('link', {
      name: 'Dragon',
    });
    expect(buttonTypeAll).toBeInTheDocument();
    expect(buttonTypeFire).toBeInTheDocument();
    expect(buttonTypeEletric).toBeInTheDocument();
    expect(buttonTypeBug).toBeInTheDocument();
    expect(buttonTypePoison).toBeInTheDocument();
    expect(buttonTypePsychic).toBeInTheDocument();
    expect(buttonTypeNormal).toBeInTheDocument();
    expect(buttonTypeDragon).toBeInTheDocument();

    userEvent.click(buttonTypeBug);
    const buttonNextPokemon = screen.getByRole('link', { name: proximoPokemon,
    });
    expect(buttonNextPokemon).toBeDisabled();
  });
});
