import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { NotFound } from '../components';

describe('Testing NotFound Component, Fourth Requirement', () => {
  it('tests if there is a heading level 2,whith a message: "Page requested not found"',
    () => {
      const { getByText } = render(
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>,
      );

      const notFoundMessage = getByText(/Page requested not found/);

      expect(notFoundMessage).toBeInTheDocument();
    });
});
