/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createSwitchNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>
    );
  }
}


 class WelcomeScreen extends Component {
  render() {
    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Login" onPress={()=> this.props.navigation.navigate('Dashboard')}/>
        <Button title="Sign Up" onPress={()=> this.props.navigation.navigate('Dashboard')}/>
      </View>
    )
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Dashboard </Text>
      </View>
    )
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: DashboardScreen
})

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen ,
  Dashboard:AppDrawerNavigator
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
