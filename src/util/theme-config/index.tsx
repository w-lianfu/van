import React, { FC, ReactNode } from 'react';
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import {
  pink,
  blue,
} from '@material-ui/core/colors';

import ButtonConfig from './button-config';

interface IProps {
  children?: ReactNode,
}
interface IState {}

const theme = createMuiTheme({
  // 改变主题色
  palette: {
    primary: {
      main: pink['A400'],
    },
    secondary: {
      main: blue['A400'],
    },
  },
  // 改变全局 material-ui 字体
  typography: {
    fontFamily: [
      'Open Sans',
      'Lato',
      'Ubuntu',
      'sans-serif'
    ].join(','),
  },
  // 覆盖默认样式
  overrides: {
    ...ButtonConfig,
  },
});

const ThemeConfig: FC = (props: IProps, state: IState) => {

  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeConfig;
