import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentRecords from './app';

test('renders StudentRecords component', () => {
  render(<StudentRecords />);
  const headingElement = screen.getByText(/Add Student Records/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders form inputs', () => {
  render(<StudentRecords />);
  const nameInput = screen.getByLabelText(/Name:/i);
  const gradeInput = screen.getByLabelText(/Grade:/i);
  expect(nameInput).toBeInTheDocument();
  expect(gradeInput).toBeInTheDocument();
});
