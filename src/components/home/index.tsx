import React, { FC } from 'react';

import AppRoot from '@commonComp/app-root';
import { Button } from '@material-ui/core';

interface IProps {}
interface IState {}

const Home: FC = (props: IProps, state: IState) => {
  return (
    <AppRoot>
      <p>Home</p>
      <p>
        <Button variant="contained" color="primary">Home</Button>
      </p>
      <p>
        <Button variant="contained" color="secondary">华新镇华南路555号</Button>
      </p>
      <p>
        <Button variant="contained" color="default">华新镇华南路555号</Button>
      </p>
      <p className="one">Here are some examples of customizing the component.</p>
      <p className="two">Here are some examples of customizing the component.</p>
      <p className="three">Here are some examples of customizing the component.</p>
    </AppRoot>
  )
}

export default Home;
