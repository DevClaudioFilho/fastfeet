import { createAppContainer,createSwitchNavigator} from 'react-navigation'

import Main from './pages/Main';
import Login from './pages/Login';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      Main,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#719c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
