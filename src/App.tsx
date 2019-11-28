import React from 'react';
import {
  Button,
} from '@material-ui/core';

import './common/index.scss';

const App: React.FC = () => {
  return (
    <div>
      <h2>Home Page...</h2>
      <p>
        <Button variant="contained" color="primary">上海</Button>
      </p>
      <p>
        <Button variant="contained" color="secondary">深圳</Button>
      </p>
    </div>
  )
}

export default App;
