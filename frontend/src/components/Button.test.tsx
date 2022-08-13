import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render a button', () => {
    render(<Button />);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
  });
});
