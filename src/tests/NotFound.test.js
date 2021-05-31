import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Testing NotFound Component, Fourth Requirement', () => {
  it('there is a heading level 2,whith a message: "Page requested not found"',
    () => {
      render(
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>,
      );

      expect(screen.getByRole('img', {
        name: 'Crying emoji',
      }))
        .toBeInTheDocument();

      expect(screen.getByText(/Page requested not found/)).toBeInTheDocument();
    });

  it('there is an image with the right source',
    () => {
      render(
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>,
      );

      expect(screen.getByRole('img', {
        name: 'Pikachu crying because the page requested was not found',
      }))
        .toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    });
});
