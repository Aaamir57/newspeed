import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Newseven from '../components/Newseven';

describe('Newseven Component', () => {
  test('Monthly billing option is selected by default', () => {
    render(
      <BrowserRouter>
        <Newseven />
      </BrowserRouter>
    );
    const monthlyButton = screen.getByText(/Monthly Billing/i);
    expect(monthlyButton).toBeInTheDocument();
  });


  test('Clicking on Choose Plan button triggers an action (you can replace this with your specific action)', () => {
    render(
      <BrowserRouter>
        <Newseven />
      </BrowserRouter>
    );

    const choosePlanButton = screen.getAllByText(/Choose Plan/i);
    fireEvent.click(choosePlanButton[0]);

   
  });

});
