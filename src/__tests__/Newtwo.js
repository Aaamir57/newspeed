import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Newtwo from '../components/Newtwo';
import { BrowserRouter } from 'react-router-dom';


test('input field interaction in Newtwo component', () => {
    render(
        <BrowserRouter>
          <Newtwo />
        </BrowserRouter>
      );
    const emailInput = screen.getByPlaceholderText(/Submit Your email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });





  
  test('renders Newtwo component', () => {
    render(
        <BrowserRouter>
          <Newtwo />
        </BrowserRouter>
      );
 
    expect(screen.getByText(/Cloud Servers with 4X Speed, Unbreakable Security/i)).toBeInTheDocument();
    expect(screen.getByText(/Get Started/i)).toBeInTheDocument();
  });