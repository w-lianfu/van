import { pink, blue } from '@material-ui/core/colors';

interface IConfig {
  MuiButton: object,
}

const ButtonConfig: IConfig = {
  MuiButton: {
    root: {
      padding: '12px 16px',
      minWidth: '100px',
      borderRadius: 0,
      lineHeight: 1,
      fontSize: '14px',
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: pink[700],
      },
    },
    containedSecondary: {
      '&:hover': {
        backgroundColor: blue[800],
      },
    },
    label: {
      textTransform: 'none',
    },
  },
};

export default ButtonConfig;
