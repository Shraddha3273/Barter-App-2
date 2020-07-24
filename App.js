import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, 
        createSwitchNavigator} from 'react-navigation';

import SignupLoginScreen from './Screens/SignupLoginScreen';
import HomeScreen from './Screens/HomeScreen';
import ExchangeScreen from './Screens/ExchangeScreen';

/*export default function App() {
  return (
    <View style={styles.container}>
     <AppContainer />
    </View>
  );
}
const TabNavigator = createBottomTabNavigator({
  HomeScreen : {screen : HomeScreen, navigationOptions:{tabBarLabel:"Home Screen",}},
  ExchangeScreen : {screen : ExchangeScreen, navigationOptions:{tabBarLabel:"Exchange Screen"}},
  
})
const SwitchNavigator = createSwitchNavigator({
WelcomeScreen : {screen : SignupLoginScreen},
BottomTab : {screen : TabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

export default function App() {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <AppContainer/>
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: HomeScreen,
    navigationOptions :{tabBaLabel : "Home",
 
  },
  ExchangeScreen: {
    screen: ExchangeScreen,
    navigationOptions :{
  
      tabBarLabel : "Exchange Screen" ,
    }}
  }
/*
const switchNavigator = createSwitchNavigator({
  SignupLoginScreen:{screen: SignupLoginScreen},
  BottomTab:{screen: TabNavigator}
}*/

const AppContainer =  createAppContainer(TabNavigator);
