import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header, Input } from 'react-native-elements'

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.buttonPressCadastro = this.buttonPressCadastro.bind(this);
    }

    buttonPress() {
        console.log('called');
        this.props.navigation.navigate('Details');
    }


    buttonPressCadastro() {
        console.log('called');
        this.props.navigation.navigate('cadastroUsuario');
    }

    render() {
        return (


            <View style={{ flex: 1, backgroundColor: "#7DD174", justifyContent: 'flex-start' }}>

                {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                /> */}

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Text style={{ color: "blue" }}>Nome de Usuário</Text>
                <TextInput
                    style={{
                        height: 40, borderColor: 'black', backgroundColor: "white",
                        borderBottomWidth: 1.0,
                        borderRadius: 30,
                    }}
                    onChangeText={text => onChangeText(text)}
                />
                <br></br>
                <Text style={{ color: "blue" }}>Senha</Text>
                <TextInput
                    style={{
                        height: 40, borderColor: 'black', backgroundColor: "white",
                        borderBottomWidth: 1.0,
                        borderRadius: 30,
                    }}
                    onChangeText={text => onChangeText(text)}
                />
                <br></br>

                <Button
                    title="Entrar"
                    onPress={this.buttonPress}
                    style={{
                        height: 40, borderColor: 'black', backgroundColor: "white",
                        borderBottomWidth: 1.0,
                        borderRadius: 30
                    }}
                />
                <br></br>

                <Text style={{
                    color: "green", fontSize: 35,
                    fontWeight: "normal", textAlign: "center"
                }}>Não tem conta ainda?</Text>
                <br></br>

                <Text style={{
                    color: "blue", fontSize: 20,
                    fontWeight: "normal", textAlign: "center"
                }}>Faça sua conta clicando no botão abaixo.</Text>

                <br></br>
                <Button
                    title="Realizar Cadastro"
                    onPress={this.buttonPressCadastro}
                    style={{ borderBottomWidth: 1.0, borderRadius: 30 }}
                />

            </View >
        );
    }
}

// export default function HomeScreenFunction({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }

export default HomeScreen;
