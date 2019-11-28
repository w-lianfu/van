import React, { FC } from 'react';
import {
  Button,
} from '@material-ui/core';

import '@commonScss';
import ThemeConfig from '@themeConfig/index'

const App: FC = () => {
  return (
    <ThemeConfig>
      <div>
        <h2>Home Page...</h2>
        <p>
          <Button variant="contained" color="primary">Bosten</Button>
        </p>
        <p>hello</p>
        <p>
          <Button variant="contained" color="secondary">深圳</Button>
        </p>
      </div>
    </ThemeConfig>
  )
}

export default App;
