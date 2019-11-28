import React, { FC } from 'react';

import AppRoot from '@commonComp/app-root';
import ThemeConfig from '@themeConfig/index';
import AppRouter from '@commonComp/app-router';

const App: FC = () => (
  <AppRoot>
    <ThemeConfig>
      <AppRouter />
    </ThemeConfig>
  </AppRoot>
)

export default App;
