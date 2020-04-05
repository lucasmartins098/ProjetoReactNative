import * as React from 'react';
import { Button, View, Text, TextInput, ScrollView } from 'react-native';
import { Header, Icon, CheckBox } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class CadastroUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }

    state = {
        checked: false,
    };

    buttonPress() {
        console.log('called');
        this.props.navigation.navigate('cadastroUsuario');
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: "#7DD174" }}>
                <br />
                <ScrollView>
                    <Text style={{
                        color: "blue", fontSize: 20,
                        fontWeight: "normal", textAlign: "center"
                    }}>Digite as Informações de acordo com os seus dados ou da sua empresa.</Text>
                    <br></br>

                    <Text style={{ color: "blue" }}>   Nome / Razão Social</Text>
                    <TextInput
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1.0,
                            borderRadius: 30,
                        }}
                    />
                    <br />
                    <Text style={{ color: "blue" }}>   Email</Text>
                    <TextInput
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1.0,
                            borderRadius: 30,
                        }}
                    />
                    <br />
                    <Text style={{ color: "blue" }}>   Email</Text>
                    <TextInput
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1.0,
                            borderRadius: 30,
                        }}
                    />
                    <br />
                    <Text style={{ color: "blue" }}>   Telefone</Text>
                    <TextInput
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1.0,
                            borderRadius: 30,
                        }}
                    />
                    <br />
                    <Text style={{ color: "blue" }}>   Login</Text>
                    <TextInput
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1.0,
                            borderRadius: 30,
                        }}
                    />
                    <br />
                    <Text style={{ color: "blue" }}>   Senha</Text>
                    <TextInput
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1.0,
                            borderRadius: 30,
                        }}
                    />
                    <br />
                    <Text style={{ color: "blue" }}>   Foto de Perfil</Text>


                    <br />
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <br />
                        <TextInput
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1.0,
                                borderRadius: 30,
                            }}
                        />
                        <Icon
                            name='image'
                            type='evilicon'
                            size="45px"
                        />
                    </View>

                    <Text style={{ color: "blue" }}>   Tipo de Perfil</Text>
                    <CheckBox
                        title="Coletor (Marque se for um coletor)"
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked })}
                    />

                </ScrollView>
            </View>
        );
    }
}

export default CadastroUsuario;