import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import { TemplateName } from './TemplateName';

describe('<TemplateName />', () => {
  it('should match snapshot', () => {
    expect.assertions(1);
    const component = renderer.create(<TemplateName />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
