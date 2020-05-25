import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header, Input } from 'react-native-elements'
import imageLogo from '../Paginas/images/Logo.png'

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.buttonPressCadastro = this.buttonPressCadastro.bind(this);
    }

    state = {
        login: '',
        password: ''
    };

    handleloginChange = login => {
        this.setState({ login })
    }

    handlePasswordChange = password => {
        this.setState({ password })
    }

    onLogin = async () => {
        const { login, password } = this.state
        try {
            if (login.length > 0 && password.length > 0) {
                this.props.navigation.navigate('App')
            }
        } catch (error) {
            alert(error)
        }
    }

    buttonPress() {
        this.RealizarLogin();
    }

    RealizarLogin() {
        return fetch('http://localhost:51544/Usuario/Autenticar/1?usuario=' + this.state.login + '&senha=' + this.state.password)
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson);
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {
                    console.log(responseJson);
                });

                this.props.navigation.navigate('HomeNColetor');

            })
            .catch((error) => {
                console.error(error);
                alert("Usuário não encontrado.");
            });
    }



    buttonPressCadastro() {
        console.log('called');
        this.props.navigation.navigate('CadastroUsuario');
    }

    render() {

        const { login, password } = this.state;

        return (


            <View style={{ flex: 1, backgroundColor: "#7DD174", justifyContent: 'flex-start' }}>

                <View style={{ backgroundColor: "#7DD174", alignItems: "center" }}>
                    <img src={imageLogo} style={{ height: 100, width: 100 }} alt='Logo da aplicação' />
                </View>
                <Text>
                    {'\n'}
                </Text>
                {/* <Text style={{ color: "blue" }}>    Nome de Usuário</Text> */}
                <TextInput
                    placeholder="   Nome de Usuário"
                    name="login"
                    value={login}
                    onChangeText={this.handleloginChange}

                    style={{
                        height: 40, borderColor: 'black', backgroundColor: "white",
                        borderBottomWidth: 1.0,
                        borderRadius: 30,
                    }}
                //  onChangeText={text => onChangeText(text)}
                />
                <Text>
                    {'\n'}
                    {'\n'}
                </Text>
                {/* <Text style={{ color: "blue" }}>    Senha</Text> */}
                <TextInput
                    placeholder="   Senha"
                    name="password"
                    value={password}
                    secureTextEntry
                    onChangeText={this.handlePasswordChange}
                    style={{
                        height: 40, borderColor: 'black', backgroundColor: "white",
                        borderBottomWidth: 1.0,
                        borderRadius: 30,
                    }}
                //onChangeText={text => onChangeText(text)}
                />
                <Text>
                    {'\n'}
                    {'\n'}
                </Text>
                <View style={styles.container}>
                    <TouchableOpacity
                        title="Entrar"
                        onPress={this.buttonPress}
                        style={styles.button}
                    >
                        <Text style={styles.textBtn}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text>
                    {'\n'}
                    {'\n'}
                </Text>

                <Text style={{
                    color: "green", fontSize: 35,
                    fontWeight: "normal", textAlign: "center"
                }}>Não tem conta ainda?</Text>
                <Text>
                    {'\n'}
                    {'\n'}
                </Text>

                <Text style={{
                    color: "blue", fontSize: 20,
                    fontWeight: "normal", textAlign: "center"
                }}>Faça sua conta clicando no botão abaixo.</Text>

                <Text>
                    {'\n'}
                    {'\n'}
                </Text>
                <View style={styles.container}>
                    <TouchableOpacity title="Realizar Cadastro"
                        onPress={this.buttonPressCadastro}
                        style={styles.button}>
                        <Text style={styles.textBtn}>
                            Realizar Cadastro
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text>
                    {'\n'}
                    {'\n'}
                </Text>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7DD174',
    },
    title: {
        marginBottom: 80,
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    },
    input: {
        margin: 10,
        width: 300,
        height: 60,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 3.17
    },
    button: {
        marginTop: 10,
        width: 300,
        height: 60,
        backgroundColor: '#00756c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3.17
    },
    textBtn: {
        color: 'white',
        fontSize: 16
    }
})


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
