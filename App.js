import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native-elements'
import "./Paginas/StatusBarConfig";

import HomeScreen from './Paginas/Home';
import DetailsScreen from './Paginas/Detalhes';
import retornoDados from './Paginas/retornoDados';
import cadastroUsuario from './Paginas/CadastroUsuario';

const Stack = createStackNavigator();

const tituloCadastro = function tituloComponent() {
  return (<Header
    backgroundColor="#2CB965"
    centerComponent={{ text: 'Cadastro', style: { color: 'black',fontSize:"20px",fontWeight:"bold" } }}
    rightComponent={{ icon: 'assignment', color: '#fff' }}
  />);
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={HomeScreen} options={{ header: "Login",text:"Login" }, {
          headerStyle: {
            backgroundColor: "#2CB965", 
            alignItems: 'center',textAlign:"center",
          },
          centerComponent:{text:"Login"}
        }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ header: tituloCadastro }} />
        <Stack.Screen name="retornoDados" component={retornoDados} options={{ header: tituloCadastro }} />
        <Stack.Screen name="cadastroUsuario" component={cadastroUsuario} options={{ header: tituloCadastro }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;