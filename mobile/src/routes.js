import { createAppContainer } from "react-navigation";
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home'
import Login from './pages/Login'

const Routes =createAppContainer(
  createStackNavigator({
    Login,
    Home,
  })
);

export default Routes;

