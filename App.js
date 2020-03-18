import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native-elements'
import "./Paginas/StatusBarConfig";

import HomeScreen from './Paginas/Home';
import DetailsScreen from './Paginas/Detalhes';
import retornoDados from  './Paginas/retornoDados';

const Stack = createStackNavigator();

const titulo = function tituloComponent() {
  return (<Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
  />);
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ header: titulo }, {headerStyle:{backgroundColor: "red"}}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={ { header: titulo }} />
        <Stack.Screen name="retornoDados" component={retornoDados} options={ { header: titulo }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;