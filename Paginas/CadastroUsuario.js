import * as React from 'react';
import { Button, View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

class CadastroUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }


    CadastrarUsuario() {
        debugger;
        return fetch('http://localhost:51544/Usuario/Create/1?teste=' + this.state.NomeRazaoSocial + '&nomeRazaoSocial=' + this.state.NomeRazaoSocial + '&email=' + this.state.Email + '&telefone=' + this.state.Telefone + '&login=' + this.state.Login + '&senha=' + this.state.Senha + '&imagemPerfil=N' + '&coletor=' + this.state.checked + '&CEP=' + this.state.CEP + '&estado=' + this.state.Estado + '&municipio=' + this.state.Municipio + '&bairro=' + this.state.Bairro + '&rua=' + this.state.Rua + '&complemento=' + this.state.Complemento)
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson);
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {
                    console.log(responseJson);
                });

                this.props.navigation.navigate('Details');

            })
            .catch((error) => {
                console.error(error);
                alert("Occoreu um erro, aguarde um momento e tente novamente.");
            });
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
        image: null
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
        this.CadastrarUsuario();
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Desculpe, nós precisamos da permissão do camera roll para isso funcionar!');
            }
        }
    };

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

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
            Complemento
        } = this.state;

        let { image } = this.state;

        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: "#7DD174" }}>


                <ScrollView>

                    <TouchableOpacity
                        title="Voltar ao menu anterior"
                        onPress={() => this.props.navigation.push('Login')} style={styles.button}>
                        <Text style={styles.textBtn}>
                            Voltar ao menu anterior
                            </Text>
                    </TouchableOpacity>
                    <Text>
                        {'\n'}
                    </Text>
                    <Text style={{
                        color: "blue", fontWeight: "normal", textAlign: "center", fontSize: 20
                    }}>Digite as Informações de acordo com os seus dados ou da sua empresa.</Text>
                    <Text>
                        {'\n'}
                        {'\n'}
                    </Text>

                    {/* <Text style={{ color: "blue" }}>   Nome / Razão Social</Text> */}
                    <TextInput
                        placeholder="   Nome / Razão Social"
                        name="NomeRazaoSocial"
                        value={NomeRazaoSocial}
                        onChangeText={this.handleNomeRazaoSocialChange}
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1,
                            borderRadius: 30,
                        }}
                    />
                    <Text>
                        {'\n'}
                    </Text>

                    {/* <Text style={{ color: "blue" }}>   Email</Text> */}
                    <TextInput
                        placeholder="   Email"
                        name="email"
                        value={Email}
                        onChangeText={this.handleEmailChange}
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1,
                            borderRadius: 30,
                        }}
                    />
                    <Text>
                        {'\n'}
                    </Text>
                    {/* <Text style={{ color: "blue" }}>   Telefone</Text> */}
                    <TextInput
                        placeholder="   Telefone"
                        name="Telefone"
                        value={Telefone}
                        onChangeText={this.handleTelefoneChange}
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1,
                            borderRadius: 30,
                        }}
                    />
                    <Text>
                        {'\n'}
                    </Text>
                    {/* <Text style={{ color: "blue" }}>   Login</Text> */}
                    <TextInput
                        placeholder="   Login"
                        name="Login"
                        value={Login}
                        onChangeText={this.handleLoginChange}
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1,
                            borderRadius: 30,
                        }}
                    />
                    <Text>
                        {'\n'}
                    </Text>
                    {/* <Text style={{ color: "blue" }}>   Senha</Text> */}
                    <TextInput
                        placeholder="   Senha"
                        name="Senha"
                        value={Senha}
                        onChangeText={this.handleSenhaChange}
                        style={{
                            height: 40, borderColor: 'black', backgroundColor: "white",
                            borderBottomWidth: 1,
                            borderRadius: 30,
                        }}
                    />
                    <Text>
                        {'\n'}
                    </Text>
                    {/* <Text style={{ color: "blue" }}>   Foto de Perfil</Text> */}


                    <Text>
                        {'\n'}
                    </Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Text>
                            {'\n'}
                        </Text>
                        {/* <TextInput
                            name="FotoPerfil"
                            value={FotoPerfil}
                            onChangeText={this.handleFotoPerfilChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1,
                                borderRadius: 30,
                                flex: 1
                            }}
                        /> */}
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity title="Clique aqui para escolher a sua foto de perfil" onPress={this._pickImage} style={styles.button}>
                                <Text style={styles.textBtn}>
                                    Clique aqui para escolher a sua foto de perfil
                                </Text>
                            </TouchableOpacity>
                            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                        </View>

                    </View>
                    <Text>
                        {'\n'}
                    </Text>
                    {/* <Text style={{ color: "blue" }}>   Tipo de Perfil</Text> */}
                    <CheckBox
                        name="TipoPerfil"
                        value={TipoPerfil}
                        onChangeText={this.handleTipoPerfilChange}
                        title="Coletor (Marque se for um coletor)"
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked })}
                    />
                    <Text>
                        {'\n'}
                    </Text>
                    <View style={{ borderColor: "yellow", flexDirection: "column" }}>

                        <Text style={{ color: "blue", textAlign: "center", fontSize: 20 }}>DADOS DE ENDEREÇO (Opcionais)</Text>
                        <Text>
                            {'\n'}
                        </Text>
                        {/* <Text style={{ color: "blue" }}>    CEP</Text> */}
                        <TextInput
                            placeholder="   CEP"
                            name="CEP"
                            value={CEP}
                            onChangeText={this.handleCEPChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1,
                                borderRadius: 30,
                            }}
                        />
                        <Text>
                            {'\n'}
                        </Text>
                        {/* <Text style={{ color: "blue" }}>    Estado</Text> */}
                        <TextInput
                            placeholder="   Estado"
                            name="Estado"
                            value={Estado}
                            onChangeText={this.handleEstadoChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1,
                                borderRadius: 30,
                            }}
                        />
                        <Text>
                            {'\n'}
                        </Text>
                        {/* <Text style={{ color: "blue" }}>    Município</Text> */}
                        <TextInput
                            placeholder="   Município"
                            name="Municipio"
                            value={Municipio}
                            onChangeText={this.handleMunicipioChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1,
                                borderRadius: 30,
                            }}
                        />
                        <Text>
                            {'\n'}
                        </Text>
                        {/* <Text style={{ color: "blue" }}>    Bairro</Text> */}
                        <TextInput
                            placeholder="   Bairro"
                            name="Bairro"
                            value={Bairro}
                            onChangeText={this.handleBairroChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1,
                                borderRadius: 30,
                            }}
                        />
                        <Text>
                            {'\n'}
                        </Text>
                        {/* <Text style={{ color: "blue" }}>    Rua</Text> */}
                        <TextInput
                            placeholder="   Rua"
                            name="Rua"
                            value={Rua}
                            onChangeText={this.handleRuaChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1,
                                borderRadius: 30,
                            }}
                        />
                        <Text>
                            {'\n'}
                        </Text>
                        {/* <Text style={{ color: "blue" }}>    Número do imóvel</Text> */}
                        <TextInput
                            placeholder="   Número do imóvel"
                            name="NumeroImovel"
                            value={NumeroImovel}
                            onChangeText={this.handleNumeroImovelChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1,
                                borderRadius: 30,
                            }}
                        />
                        <Text>
                            {'\n'}
                        </Text>
                        {/* <Text style={{ color: "blue" }}>    Complemento</Text> */}
                        <TextInput
                            placeholder="   Complemento"
                            name="Complemento"
                            value={Complemento}
                            onChangeText={this.handleComplementoChange}
                            style={{
                                height: 40, borderColor: 'black', backgroundColor: "white",
                                borderBottomWidth: 1,
                                borderRadius: 30,
                            }}
                        />
                    </View>
                    <Text>
                        {'\n'}
                    </Text>
                    <TouchableOpacity 
                        title="Enviar Dados"
                        onPress={this.buttonPress}
                        style={styles.button}>
                        <Text style={styles.textBtn}>
                            Enviar Dados
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
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
        width: 360,
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

export default CadastroUsuario;