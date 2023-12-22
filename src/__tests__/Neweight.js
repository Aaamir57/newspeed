import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Neweight from '../components/Neweight';
import { BrowserRouter } from 'react-router-dom'; 

describe('Neweight Component', () => {
  test('Renders VPS Hosting Features heading', () => {
    render(
        <BrowserRouter>
          <Neweight />
        </BrowserRouter>
      );
    const headingElement = screen.getByText(/VPS Hosting Features/i);
    expect(headingElement).toBeInTheDocument();
  });



  test('renders Neweight component with a single image', () => {
    const { getByTestId } =
     render(
        <BrowserRouter>
          <Neweight />
        </BrowserRouter>
      );
  
    const feature1 = getByTestId('feature-1');
    const image1 = getByTestId('image-1');

    expect(feature1).toBeInTheDocument();
    expect(image1).toBeInTheDocument();
    expect(image1).toHaveAttribute('alt', ' ');

  });

});
