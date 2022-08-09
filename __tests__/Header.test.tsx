import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from '../components/organisms/Header';

describe('<Header />', () => {
  it('renders and matches the snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
  test('renders a header title', () => {
    const { getByText } = render(<Header />);
    expect(getByText('_Servers')).toBeInTheDocument();
  });
  test('shows a logout button', () => {
    const { getByLabelText } = render(<Header />);
    expect(getByLabelText('logout')).toBeInTheDocument();
    expect(getByLabelText('logout')).toHaveTextContent('Logout →');
  });
});
