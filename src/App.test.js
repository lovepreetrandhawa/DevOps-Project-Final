import { render, screen } from '@testing-library/react';
import StudentRecords from './StudentRecords'; // Assuming your component is named StudentRecords

test('renders StudentRecords component', () => {
  render(<StudentRecords />);
  // Assuming your StudentRecords component renders some content
  // You should adjust the below assertions based on what your component renders
  const headingElement = screen.getByText(/Add Student Records/i);
  expect(headingElement).toBeInTheDocument();
});
