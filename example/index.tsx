import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToggleSwitch } from '../.';
import '../dist/tailwind.css';

const App = () => {
  const [enable, setEnable] = React.useState<boolean>(false);

  return (
    <div>
      <ToggleSwitch
        enabled={enable}
        onChange={(value) => {
          setEnable(value);
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
