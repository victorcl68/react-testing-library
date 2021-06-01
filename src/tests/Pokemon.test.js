import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { /* render , */ screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testing Pokemon Component, Sixth Requirement', () => {
  describe('Rendering of the card with the information of a certain Pokémon',
    () => {
      const MoreDetails = 'More details';
      it('there is a More Details Link in the App Component', () => {
        renderWithRouter(<App />);
        const MoreDetailsLink = screen.getByRole('link', {
          name: MoreDetails,
        });

        userEvent.click(MoreDetailsLink);

        expect(screen.getByTestId('pokemon-name')).toHaveTextContent('Pikachu');
        expect(screen.getByTestId('pokemon-type')).toHaveTextContent('Electric');
        expect(screen.getByTestId('pokemon-weight'))
          .toHaveTextContent('Average weight: 6.0 kg');

        expect(screen.getAllByRole('img', {
          name: 'Pikachu sprite',
        })[0]).toBeInTheDocument();
      });
    });
});
