import {
    StackNavigator,
    DrawerNavigator,
    TabNavigator}
          from 'react-navigation';
  import FirstScreen  from './FirstScreen';
  import SecondScreen  from './SecondScreen';
  import React from 'react';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
  const Navigation=StackNavigator({
    First: {
      screen: LoginScreen,
    },
    Second: {
      screen: RegisterScreen,
    },
  });
  export default Navigation;