import React, { FC } from 'react';
import { observer } from 'mobx-react';
import {
  deepOrange,
  green,
  red,
  purple,
  pink,
  blue,
} from '@material-ui/core/colors';

import store from '@commonStore/test';
import AppRoot from '@commonComp/app-root';
import { Button } from '@material-ui/core';

interface IProps {}
interface IState {}

const Home: FC = (props: IProps, state: IState) => {
  return (
    <AppRoot>
      <p>Home: {store.count}</p>
      <p>
        <Button variant="contained" color="primary" onClick={store.increment}>华新镇华南路555号</Button>
      </p>
      <p>Hyphen</p>
      <p>
        <Button variant="contained" color="secondary" onClick={store.decrement}>华新镇华南路555号</Button>
      </p>
      <p>Hyphen</p>
      <p>
        <Button variant="contained" color="default">华新镇华南路555号</Button>
      </p>
      <p>Hyphen</p>
      <p>
        <Button variant="contained" color="primary" disabled>华新镇华南路555号</Button>
      </p>
      <p style={{color: pink['A400']}}>
        <label className="demo-label">pink:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p style={{color: blue['A400']}}>
        <label className="demo-label">blue:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p style={{color: purple['A400']}}>
        <label className="demo-label">purple:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p style={{color: red['A400']}}>
        <label className="demo-label">red:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p style={{color: green['A400']}}>
        <label className="demo-label">green:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p style={{color: deepOrange['A400']}}>
        <label className="demo-label">deepOrange:</label>
        <span className="demo-span">Here are some examples of customizing the component.</span>
      </p>
      <p>
        <label className="demo-label">Open Sans:</label>
        <span className="demo-span" style={{fontFamily: 'Open Sans'}}>Here are some examples of customizing the component.</span>
      </p>
      <p>
        <label className="demo-label">Lato:</label>
        <span className="demo-span" style={{fontFamily: 'Lato'}}>Here are some examples of customizing the component.</span>
      </p>
      <p>
        <label className="demo-label">Ubuntu:</label>
        <span className="demo-span" style={{fontFamily: 'Ubuntu'}}>Here are some examples of customizing the component.</span>
      </p>
    </AppRoot>
  )
}

export default observer(Home);
