import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requirement 1, Testing App.js', () => {
  it('renders a reading with the text `Pokédex`', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const heading = getByText(/Pokédex/i);
    expect(heading).toBeInTheDocument();
  });

  it('shows the Pokédex when the route is `/`', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    expect(getByText('Encountered pokémons')).toBeInTheDocument();
  });

  it('tests if there are three links on the top of the application', () => {
    const { getByText, getAllByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const firstLink = getAllByRole('link')[0];
    const secondLink = getAllByRole('link')[1];
    const thirdLink = getAllByRole('link')[2];
    const firstLinkText = getByText(/Home/);
    const secondLinkText = getByText(/About/);
    const thirdLinkText = getByText(/Favorite Pokémons/);
    expect(firstLink).toBe(firstLinkText);
    expect(secondLink).toBe(secondLinkText);
    expect(thirdLink).toBe(thirdLinkText);
    expect(firstLink
      && secondLink
      && thirdLink
      && firstLinkText
      && secondLinkText
      && thirdLinkText)
      .toBeInTheDocument();
  });

  it('tests if when the Home Link is clicked the user ir redirected to a / pathname',
    () => {
      const { getByText, history } = renderWithRouter(<App />);
      const firstLinkText = getByText(/Home/);
      fireEvent.click(firstLinkText);
      const { pathname } = history.location;
      expect(pathname).toBe('/');
    });

  it('when the About Link is clicked the user ir redirected to a /about pathname',
    () => {
      const { getByText, history } = renderWithRouter(<App />);
      const secondLinkText = getByText(/About/);
      fireEvent.click(secondLinkText);
      const { pathname } = history.location;
      expect(pathname).toBe('/about');
    });

  it('when the Favorites Link is clicked the user ir redirected to a /favorites pathname',
    () => {
      const { getByText, history } = renderWithRouter(<App />);
      const thirdLinkText = getByText(/Favorite Pokémons/);
      fireEvent.click(thirdLinkText);
      const { pathname } = history.location;
      expect(pathname).toBe('/favorites');
    });

  it('when some not known adress is used the user ir redirected to NotFound.js',
    () => {
      const { getByText, history } = renderWithRouter(<App />);
      history.push('/qualquer-pagina/que-nao-exista/');
      const noMatching = getByText(/Page requested not found/);
      expect(noMatching).toBeInTheDocument();
    });
});
