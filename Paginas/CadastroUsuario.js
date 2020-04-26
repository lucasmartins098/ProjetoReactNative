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
        NomeRazaoSocial: '',
        Email: '',
        Telefone: '',
        Login: '',
        Senha: '',
        FotoPerfil: '',
        TipoPerfil: false,
        checked: false,
        CEP: '',
        Estado: '',
        Municipio: '',
        Bairro: '',
        Rua: '',
        NumeroImovel: '',
        Complemento: '',
    };

    handleNomeRazaoSocialChange = NomeRazaoSocial => {
        this.setState({ NomeRazaoSocial })
    }
    handleEmailChange = Email => {
        this.setState({ Email })
    }
    handleTelefoneChange = Telefone => {
        this.setState({ Telefone })
    }
    handleLoginChange = Login => {
        this.setState({ Login })
    }
    handleSenhaChange = Senha => {
        this.setState({ Senha })
    }
    handleFotoPerfilChange = FotoPerfil => {
        this.setState({ FotoPerfil })
    }
    handleTipoPerfilChange = TipoPerfil => {
        this.setState({ TipoPerfil })
    }
    handlecheckedChange = checked => {
        this.setState({ checked })
    }
    handleCEPChange = CEP => {
        this.setState({ CEP })
    }
    handleEstadoChange = Estado => {
        this.setState({ Estado })
    }
    handleMunicipioChange = Municipio => {
        this.setState({ Municipio })
    }
    handleBairroChange = Bairro => {
        this.setState({ Bairro })
    }
    handleRuaChange = Rua => {
        this.setState({ Rua })
    }
    handleNumeroImovelChange = NumeroImovel => {
        this.setState({ NumeroImovel })
    }
    handleComplementoChange = Complemento => {
        this.setState({ Complemento })
    }

    buttonPress() {
        debugger;
        console.log('called');
        this.props.navigation.navigate('cadastroUsuario');
    }

    render() {
        const {
            NomeRazaoSocial,
            Email,
            Telefone,
            Login,
            Senha,
            FotoPerfil,
            TipoPerfil,
            checked,
            CEP,
            Estado,
            Municipio,
            Bairro,
            Rua,
            NumeroImovel,
            Complemento,
        } = this.state;

        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: "#7DD174" }}>
                <br />

                <ScrollView>

                    <Button
                        title="Voltar ao menu anterior"
                        onPress={() => this.props.navigation.push('Login')} />

                    <Text style={{
                        color: "blue", fontSize: 20,
                        fontWeight: "normal", textAlign: "center"
                    }}>Digite as Informações de acordo com os seus dados ou da sua empresa.</Text>
                    <br></br>

                    <Text style={{ color: "blue" }}>   Nome / Razão Social</Text>
                    <TextInput
                        name="NomeRazaoSocial"
                        value={NomeRazaoSocial}
                        onChangeText={this.handleNomeRazaoSocialChange}
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1.0,
                            borderRadius: 30,
                        }}
                    />
                    <br />

                    <Text style={{ color: "blue" }}>   Email</Text>
                    <TextInput
                        name="email"
                        value={Email}
                        onChangeText={this.handleEmailChange}
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1.0,
                            borderRadius: 30,
                        }}
                    />
                    <br />
                    <Text style={{ color: "blue" }}>   Telefone</Text>
                    <TextInput
                        name="Telefone"
                        value={Telefone}
                        onChangeText={this.handleTelefoneChange}
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1.0,
                            borderRadius: 30,
                        }}
                    />
                    <br />
                    <Text style={{ color: "blue" }}>   Login</Text>
                    <TextInput
                        name="Login"
                        value={Login}
                        onChangeText={this.handleLoginChange}
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1.0,
                            borderRadius: 30,
                        }}
                    />
                    <br />
                    <Text style={{ color: "blue" }}>   Senha</Text>
                    <TextInput
                        name="Senha"
                        value={Senha}
                        onChangeText={this.handleSenhaChange}
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
                            name="FotoPerfil"
                            value={FotoPerfil}
                            onChangeText={this.handleFotoPerfilChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1.0,
                                borderRadius: 30,
                                flex: 1
                            }}
                        />
                        <Icon
                            name='image'
                            type='evilicon'
                            size="45px"
                            style={{ flex: 0.1 }}
                        />
                    </View>

                    <Text style={{ color: "blue" }}>   Tipo de Perfil</Text>
                    <CheckBox
                        name="TipoPerfil"
                        value={TipoPerfil}
                        onChangeText={this.handleTipoPerfilChange}
                        title="Coletor (Marque se for um coletor)"
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked })}
                    />
                    <br />
                    <View style={{ borderColor: "yellow", flexDirection: "column" }}>

                        <Text style={{ color: "blue", textAlign: "center", fontSize: 20 }}>DADOS DE ENDEREÇO (Opcionais)</Text>
                        <br />
                        <Text style={{ color: "blue" }}>    CEP</Text>
                        <TextInput
                            name="CEP"
                            value={CEP}
                            onChangeText={this.handleCEPChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1.0,
                                borderRadius: 30,
                            }}
                        />
                        <br />
                        <Text style={{ color: "blue" }}>    Estado</Text>
                        <TextInput
                            name="Estado"
                            value={Estado}
                            onChangeText={this.handleEstadoChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1.0,
                                borderRadius: 30,
                            }}
                        />
                        <br />
                        <Text style={{ color: "blue" }}>    Município</Text>
                        <TextInput
                            name="Municipio"
                            value={Municipio}
                            onChangeText={this.handleMunicipioChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1.0,
                                borderRadius: 30,
                            }}
                        />
                        <br />
                        <Text style={{ color: "blue" }}>    Bairro</Text>
                        <TextInput
                            name="Bairro"
                            value={Bairro}
                            onChangeText={this.handleBairroChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1.0,
                                borderRadius: 30,
                            }}
                        />
                        <br />
                        <Text style={{ color: "blue" }}>    Rua</Text>
                        <TextInput
                            name="Rua"
                            value={Rua}
                            onChangeText={this.handleRuaChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1.0,
                                borderRadius: 30,
                            }}
                        />
                        <br />
                        <Text style={{ color: "blue" }}>    Número do imóvel</Text>
                        <TextInput
                            name="NumeroImovel"
                            value={NumeroImovel}
                            onChangeText={this.handleNumeroImovelChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1.0,
                                borderRadius: 30,
                            }}
                        />
                        <br />
                        <Text style={{ color: "blue" }}>    Complemento</Text>
                        <TextInput
                            name="Complemento"
                            value={Complemento}
                            onChangeText={this.handleComplementoChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1.0,
                                borderRadius: 30,
                            }}
                        />
                    </View>
                    <br />
                    <Button
                        title="Enviar Dados"
                        onPress={this.buttonPress}
                        style={{ borderBottomWidth: 1.0, borderRadius: 30 }}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default CadastroUsuario;