import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentRecords from './app';

test('renders StudentRecords component', () => {
  render(<StudentRecords />);
  const headingElement = screen.getByText(/Student Records/i); // Update text matcher
  expect(headingElement).toBeInTheDocument();
});

test('renders form inputs', () => {
  render(<StudentRecords />);
  const nameInput = screen.getByLabelText(/Student Name:/i); // Update text matcher
  const gradeInput = screen.getByLabelText(/Student Grade:/i); // Update text matcher
  expect(nameInput).toBeInTheDocument();
  expect(gradeInput).toBeInTheDocument();
});
