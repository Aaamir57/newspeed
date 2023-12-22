import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';


test('renders Header component', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const textone = screen.getAllByText("Product");
  const textwo = screen.getAllByText("Solutions");
  for (let i = 0; i < textone.length; i++) {
    expect(textone[i]).toBeInTheDocument();
  }

  for (let i = 0; i < textwo.length; i++) {
    expect(textwo[i]).toBeInTheDocument();
  }

});



test('toggles dropdown when clicked', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  ); 
  expect(screen.queryAllByText('Product')).toHaveLength(2);
  fireEvent.click(screen.getByTestId('toggle-btn'));
  expect(screen.getAllByText('Product')).toHaveLength(2);
  fireEvent.click(screen.getByTestId('toggle-btn'));
  expect(screen.queryAllByText('Product')).toHaveLength(2); 
});




