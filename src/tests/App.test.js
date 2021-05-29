import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requirement 1, Testing App.js', () => {
  it('renders a heading with the text `Pokédex`',
    () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      expect(screen.getByRole('heading', {
        level: 1,
        name: 'Pokédex',
      })).toBeInTheDocument();
    });

  it('shows the Pokédex when the route is `/`',
    () => {
      render(
        <MemoryRouter initialEntries={ ['/'] }>
          <App />
        </MemoryRouter>,
      );

      expect(screen.getByRole('heading', {
        level: 2,
        name: 'Encountered pokémons',
      })).toBeInTheDocument();
    });

  it('there are three links on the top of the application with the right text',
    () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      expect(screen.getByRole('link', {
        name: 'Home',
      })).toBeInTheDocument();

      expect(screen.getByRole('link', {
        name: 'About',
      })).toBeInTheDocument();

      expect(screen.getByRole('link', {
        name: 'Favorite Pokémons',
      })).toBeInTheDocument();
    });

  it('when "Home" Link is clicked the user is redirected to / pathname',
    () => {
      const { history } = renderWithRouter(<App />);
      const { pathname } = history.location;

      userEvent.click(screen.getByRole('link', {
        name: 'Home',
      }));

      expect(pathname).toBe('/');
    });

  it('when "About" Link is clicked the user is redirected to /about pathname',
    () => {
      const { history } = renderWithRouter(<App />);

      userEvent.click(screen.getByRole('link', {
        name: 'About',
      }));

      const { pathname } = history.location;

      expect(pathname).toBe('/about');
    });

  it('when "Favorite Pokémons" is clicked the user is redirected to /favorites pathname',
    () => {
      const { history } = renderWithRouter(<App />);

      userEvent.click(screen.getByRole('link', {
        name: 'Favorite Pokémons',
      }));
      const { pathname } = history.location;

      expect(pathname).toBe('/favorites');
    });

  it('when some not known adress is accessed the user is redirected to NotFound.js',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/qualquer-pagina/que-nao-exista/');

      expect(screen.getByText(/Page requested not found/)).toBeInTheDocument();
    });
});
