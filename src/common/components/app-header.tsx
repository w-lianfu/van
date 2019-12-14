import React, { FC } from 'react';
import {
  AppBar,
  Button,
  Typography,
  Box,
  Toolbar,
} from '@material-ui/core';
import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';
import { pink, grey } from '@material-ui/core/colors';


import '@scss/common-comp/app-header.scss';

interface IProps {}
interface IState {}

const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    toolBar: {
      [theme.breakpoints.up('md')]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      display: 'flex',
      justifyContent: 'space-between',
    },
    logoText: {
      paddingRight: '5px',
      fontSize: '20px',
      fontWeight: 500,
      color: pink['A400'],
    },
    rightText: {
      paddingLeft: '5px',
      color: grey[50],
    },
  })
));

const AppHeader: FC = (props: IProps, state: IState) => {
  const classes = useStyles();

  return (
    <AppBar square position="static" className="app-header">
      <Toolbar variant="dense" className={classes.toolBar}>
        <Box>
          <Typography className={classes.logoText}>Van</Typography>
        </Box>
        <Box>
          <Button variant="contained" color="primary">电影</Button>
          <Button variant="contained" color="secondary">短视频</Button>
          <Button variant="contained">音乐</Button>
          <Button variant="contained" color="primary">图片</Button>
          <Button variant="contained" color="secondary">文章</Button>
          <Button variant="contained">英语短文</Button>
        </Box>
        <Box>
          <Typography className={classes.rightText}>Right</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader;
