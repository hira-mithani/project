import { render, screen } from '@testing-library/react';
import SiteHeader from '../components/SiteHeader';
import { User } from '../icons'; // Ensure User icon is imported

test('renders SiteHeader with correct icon', () => {
  render(<SiteHeader />);
  const iconElement = screen.getByTestId('icon'); // Assuming the icon has a data-testid attribute
  expect(iconElement).toBeInTheDocument();
  expect(iconElement).toHaveAttribute('src', User); // Check if the icon is User
});