import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as ToggleSwitch } from '../stories/ToggleSwitch.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ToggleSwitch enabled={true} onChange={(value: boolean) => !value} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
