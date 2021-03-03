import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';

import { Button } from './Button';

describe('button', () => {
  it('should match snapshot', () => {
    expect.assertions(1);
    const handleClick = jest.fn();
    const component = renderer.create(
      <Button onClick={handleClick}>Click Me</Button>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render children', () => {
    expect.assertions(1);
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click Me</Button>,
    );
    expect(getByText('Click Me')).toBeInTheDocument();
  });
  it('should call onClick callback', () => {
    expect.assertions(1);
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click Me</Button>,
    );
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
