import React from 'react';
import { render, screen,waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

import Newfour from '../components/Newfour';  // Adjust the import path

test('renders Newfour component', () => {
  render(
    <BrowserRouter>
      <Newfour />
    </BrowserRouter>
  );

  expect(screen.getByText(/The Best Quality Hosting Features/i)).toBeInTheDocument();
  expect(screen.getByText(/Explore More Features/i)).toBeInTheDocument();
});







test('renders the correct number of features in Newfour component', () => {
    render(
      <BrowserRouter>
        <Newfour />
      </BrowserRouter>
    );
    const featureElements = screen.getAllByTestId('feature');
    const expectedNumberOfFeatures = 3; 
    expect(featureElements).toHaveLength(expectedNumberOfFeatures);
  
   
  });