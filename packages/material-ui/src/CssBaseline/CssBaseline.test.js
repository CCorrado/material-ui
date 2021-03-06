import * as React from 'react';
import { expect } from 'chai';
import { createMount } from '@material-ui/core/test-utils';
import CssBaseline from './CssBaseline';

describe('<CssBaseline />', () => {
  let mount;

  before(() => {
    // StrictModeViolation: makeStyles will retain the styles in the head in strict mode
    // which becomes an issue for global styles
    mount = createMount({ strict: false });
  });

  after(() => {
    mount.cleanUp();
  });

  it('renders its children', () => {
    const wrapper = mount(
      <CssBaseline>
        <div id="child" />
      </CssBaseline>,
    );
    expect(wrapper.find('#child').type()).to.equal('div');
  });
});
