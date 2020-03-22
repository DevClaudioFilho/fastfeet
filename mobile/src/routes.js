import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';


import Main from './pages/Main';
import Login from './pages/Login';

const Routes = createAppContainer(
  createStackNavigator(
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