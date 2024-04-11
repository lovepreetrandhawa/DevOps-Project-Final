import { render, screen } from '@testing-library/react';
import StudentRecords from './StudentRecords';

test('renders StudentRecords component', () => {
  render(<StudentRecords />);
  const headingElement = screen.getByText(/Add Student Records/i);
  expect(headingElement).toBeInTheDocument();
});
