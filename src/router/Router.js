import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import BlueNavigator from './navigators/BlueNavigator';
import CameraNavigator from './navigators/CameraNavigator';
import HttpRequestNavigator from './navigators/HttpRequestNavigator';
import MapsNavigator from './navigators/MapsNavigator';

const AppBottomNavigator = createBottomTabNavigator(
  {
    Bluetooth: {
      screen: BlueNavigator,
      navigationOptions: {
        headerShow: false,
        tabBarIcon: ({tintColor}) => (
          <Icon name="bluetooth" color={'#000'} size={20} />
        ),
      },
    },
    Maps: {
      screen: MapsNavigator,
      navigationOptions: {
        headerShow: false,
        tabBarIcon: ({tintColor}) => (
          <Icon name="my-location" color={'#000'} size={20} />
        ),
      },
    },
    Camera: {
      screen: CameraNavigator,
      navigationOptions: {
        headerShow: false,
        tabBarIcon: ({tintColor}) => (
          <Icon name="camera-alt" color={'#000'} size={20} />
        ),
      },
    },
    Pessoas: {
      screen: HttpRequestNavigator,
      navigationOptions: {
        headerShow: false,
        tabBarIcon: ({tintColor}) => (
          <Icon name="people-alt" color={'#000'} size={20} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Pessoas',
    headerMode: 'screen',
  },
);

const Navigator = createStackNavigator(
  {
    Bottom: {
      screen: AppBottomNavigator,
    },
  },
  {
    defaultNavigationOptions: {
      headerShow: false,
    },
  },
);

const AppContainer = createAppContainer(Navigator);
export default AppContainer;
