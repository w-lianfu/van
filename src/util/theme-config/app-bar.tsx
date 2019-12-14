import { grey } from '@material-ui/core/colors';

interface IConfig {
  MuiAppBar: object,
}

const AppBarConfig: IConfig = {
  MuiAppBar: {
    colorPrimary: {
      backgroundColor: grey[50],
    },
  },
}

export default AppBarConfig;
