import React from 'react';
import Renderer from 'react-test-renderer';

import SimpleHeader from './SimpleHeader';

describe('SimpleHeader', () => {
  it('renders correctly', () => {
    const simpleHeaderRenderer = Renderer.create(
      <SimpleHeader siteTitle='Default Starter' />
    );
    const tree = simpleHeaderRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
