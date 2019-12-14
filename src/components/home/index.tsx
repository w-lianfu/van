import React, { FC } from 'react';
import { observer } from 'mobx-react';
import {
  Paper,
} from '@material-ui/core';

import store from '@commonStore/test';
import AppRoot from '@commonComp/app-root';
import AppHeader from '@commonComp/app-header';

interface IProps {}
interface IState {}

const Home: FC = (props: IProps, state: IState) => {

  return (
    <AppRoot>
      <Paper square className="home-paper">
        <AppHeader />

        <p>Count: {store.count}</p>
      </Paper>
    </AppRoot>
  )
}

export default observer(Home);
