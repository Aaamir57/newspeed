import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import Newfive from '../components/Newfive';



test('renders image and title in Newfive component', () => {
    render(
        <BrowserRouter>
          <Newfive />
        </BrowserRouter>
      );


  const imageElement = screen.getByAltText(/No-Questions-Asked 30-Day Refund Guarantee/i);
  expect(imageElement).toBeInTheDocument();


});
