import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native-elements'
import "./Paginas/StatusBarConfig";

import HomeScreen from './Paginas/Home';
import DetailsScreen from './Paginas/Detalhes';
import RetornoDados from './Paginas/retornoDados';
import CadastroUsuario from './Paginas/CadastroUsuario';
import HomeNColetor from './Paginas/HomeNColetor';

const Stack = createStackNavigator();

const tituloCadastro = function tituloComponent() {
  return (<Header
    backgroundColor="#2CB965"
    centerComponent={{ text: 'Cadastro', style: { color: 'black', fontSize: "20px", fontWeight: "bold" } }}
    rightComponent={{ icon: 'assignment', color: '#fff' }}
  />);
}

const PaginaInicialTitulo = function tituloComponent() {
  return (<Header
    backgroundColor="#2CB965"
    centerComponent={{ text: 'Página Inicial', style: { color: 'black', fontSize: "20px", fontWeight: "bold" } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
  />);
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={HomeScreen} options={{ header: "Login", text: "Login" }, {
          headerStyle: {
            backgroundColor: "#2CB965",
            alignItems: "center",
            textAlign: "center"
          },
          centerComponent: { text: "Login" },
          headerTitle: "",
          headerShown: false
        }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ header: tituloCadastro }} />
        <Stack.Screen name="RetornoDados" component={RetornoDados} options={{ header: tituloCadastro }} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} options={{ header: tituloCadastro }} />
        <Stack.Screen name="HomeNColetor" component={HomeNColetor} options={{ header: PaginaInicialTitulo, headerShown: false  }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;