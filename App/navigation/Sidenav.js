import React from 'react';
import {Text, Button, TouchableOpacity} from 'react-native';
import ViewTimesheets from '../Components/ViewTimesheets';
import EnterTimeSheet from '../Components/EnterTimeSheet';
import ViewDetailedTimeSheet from '../Components/ViewDetailedTimesheet';
import LoginPage from '../Components/LoginPage';

import ChangePassword from '../Components/ChangePassword';
import FileUploader from '../Components/FileUploader';
import Logout from '../Components/Logout';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SideBarItems = createDrawerNavigator(
  {
    ViewTimesheets: {
      screen: ViewTimesheets,
      navigationOptions: {
        drawerLabel: 'View Timesheet',
      },
    },
    EnterTimeSheet: {
      screen: EnterTimeSheet,
      navigationOptions: {
        drawerLabel: 'Enter Timesheet',
      },
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {
        drawerLabel: 'Change Password',
      },
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        drawerLabel: 'Logout',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      cardStyle: {opacity: 1},
    },
    initialRouteName: 'ViewTimesheets',
    drawerBackgroundColor: '#AED6F1',
    drawerPosition: 'left',
    drawerType: 'front',
    drawerWidth: 200,
    minSwipeDistance: 10,
    drawerLockMode: 'unlocked',
    backBehavior: 'initialRoute',
    detachInactiveScreens: true,
    unmountInactiveRoutes: true,
  },
);

const SideNav = createStackNavigator(
  {
    init: {
      screen: SideBarItems,
      navigationOptions: ({navigation}) => ({
        title: 'Time Sheets',
        headerTitleAlign: 'center',
        cardStyle: {opacity: 1},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MaterialCommunityIcons
              name="menu"
              size={30}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        ),

        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EnterTimeSheet', {navFrom: 'default date'})
            }>
            <MaterialCommunityIcons
              name="plus"
              size={30}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        ),
      }),
    },
    ViewDetailedTimeSheet: {
      screen: ViewDetailedTimeSheet,
      navigationOptions: {
        title: 'Time Sheet',
        headerTitleAlign: 'center',
      },
    },
  },
  {
    initialRouteName: 'init',
  },
);
export default SideNav;
