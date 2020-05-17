import * as React from 'react';
import { Button, View, Text, TextInput, ScrollView, Image, ViewPropTypes } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

class CadastroUsuario extends React.Component {

  constructor(props) {
    super(props);
  }

  postData = async (str) => {
    try {
      let res = await fetch('http://localhost:51544/Usuario/CreateLixo', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "recordId": "1",
        }),
      });
      res = await res.json();
      console.log(res)
      Alert.alert('onPress', res.json.str);
    } catch (e) {
      console.error(e);
      debugger;
    }
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
          <View style={{ backgroundColor: '#32CD32', borderWidth: "50px", borderColor: "#7DD174" }}>
            <Text style={{
              color: "green", fontSize: 35,
              fontWeight: "normal", textAlign: "center"
            }}>
              O que deseja descartar?
          </Text>
            <Text>
              {'\n'}
              {'\n'}
            </Text>
            <Text style={{ color: "blue" }}>    Nome do Resíduo</Text>
            <TextInput
              name="email"
              style={{
                height: 40, borderColor: 'black', backgroundColor: "white",
                borderBottomWidth: 1.0,
                borderRadius: 30,
              }} />

            <Text>
              {'\n'}
            </Text>
            <View style={{ flex: 1, flexDirection: "row" }}>

              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="clique aqui e escolha a foto do Resíduo" onPress={this._pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
              </View>
              <Icon
                name='image'
                type='evilicon'
                style={{ flex: 0.1 }}
              />
            </View>
            <Text>
              {'\n'}
            </Text>

            <Text style={{ color: "blue" }}>    Descrição do resíduo</Text>
            <TextInput
              name="email"
              style={{
                height: 40, borderColor: 'black', backgroundColor: "white",
                borderBottomWidth: 1.0,
                borderRadius: 30,
              }} />
            <Text>
              {'\n'}
            </Text>
            <Button
              title="Publicar resíduo"
              onPress={() => this.postData('POST Button Click')}
              style={{ borderBottomWidth: 1.0, borderRadius: 30 }} />
            <Text>
              {'\n'}
              {'\n'}
            </Text>
          </View>
          <Text>
            {'\n'}
            {'\n'}
          </Text>
          <View style={{ backgroundColor: '#32CD32', borderWidth: "50px", borderColor: "#32CD32" }}>
            <Button
              title="Encontrar coletor ou área de descarte"
              onPress={() => this.postData('POST Button Click')}
              style={{ borderBottomWidth: 1.0, borderRadius: 30 }} />
          </View>
          <Text>
            {'\n'}
            {'\n'}
          </Text>
          <View style={{ backgroundColor: '#32CD32', borderWidth: "50px", borderColor: "#32CD32" }}>
            <Button
              title="Obter informações e dicas sobre um resíduo"
              onPress={() => this.postData('POST Button Click')}
              style={{ borderBottomWidth: 1.0, borderRadius: 30 }} />
          </View>
          <Text>
            {'\n'}
            {'\n'}
          </Text>
          <View style={{ backgroundColor: '#32CD32', borderWidth: "50px", borderColor: "#32CD32" }}>
            <Button
              title="Publicar dúvidas sobre um resíduo"
              onPress={() => this.postData('POST Button Click')}
              style={{ borderBottomWidth: 1.0, borderRadius: 30 }} />
          </View>
          <Text>
            {'\n'}
            {'\n'}
          </Text>
          <View style={{ backgroundColor: '#32CD32', borderWidth: "50px", borderColor: "#32CD32" }}>
            <Button
              title="Publicar interesse em entregar resíduo para coleta"
              onPress={() => this.postData('POST Button Click')}
              style={{ borderBottomWidth: 1.0, borderRadius: 30 }} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default CadastroUsuario;