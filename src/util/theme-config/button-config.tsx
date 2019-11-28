import { purple } from '@material-ui/core/colors';

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

      '&.Mui-disabled': {
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },
    contained: {
      color: '#fff',
      backgroundColor: purple['A400'],
      boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,

      '&:hover': {
        backgroundColor: purple['A700'],
      },
      '&.Mui-disabled': {
        color: 'rgba(0, 0, 0, 0.6)',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      },
    },
    label: {
      textTransform: 'none',
    },
  },
};

export default ButtonConfig;
