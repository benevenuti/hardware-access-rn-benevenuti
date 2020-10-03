import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BluePage from './src/pages/BluePage';
import MapsPage from './src/pages/MapsPage';

const AppNavigator = createStackNavigator({
  Maps: {
    screen: MapsPage,
    navigationOptions: {
      headerShown: false,
    },
  },
  Ble: {
    screen: BluePage,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
