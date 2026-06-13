// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainAsk title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainAsk/i);
    expect(titleElement).toBeInTheDocument();
});
