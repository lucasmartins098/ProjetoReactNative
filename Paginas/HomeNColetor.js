import * as React from 'react';
import { Button, View, Text, TextInput, ScrollView, Image, ViewPropTypes, StyleSheet, TouchableOpacity } from 'react-native';
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
          "Residuo": this.state.Residuo,
          "image": this.state.image,
          "DescricaoResiduo": this.state.DescResiduo
        }),
      });
      res = await res.json();
      console.log(res)
      alert('onPress', res.json.str);
    } catch (e) {
      console.error(e);
      debugger;
    }
  }

  state = {
    Residuo: '',
    image: null,
    DescResiduo: ''
  };

  handleResiduoChange = Residuo => {
    this.setState({ Residuo })
  }
  handleEmailChange = Email => {
    this.setState({ Email })
  }
  handleDescResiduoChange = DescResiduo => {
    this.setState({ DescResiduo })
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
      Residuo,
      DescResiduo
    } = this.state;

    let { image } = this.state;



    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: "#7DD174" }}>
        <Button
          color="#228b22"
          title="SAIR"
          onPress={() => this.props.navigation.push('Login')}
        />
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
            {/* <Text style={{ color: "blue" }}>    Nome do Resíduo</Text> */}
            <TextInput
              placeholder="   Nome do Resíduo"
              name="Residuo"
              value={Residuo}
              onChangeText={this.handleResiduoChange}
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
                <TouchableOpacity style={styles.button} title="clique aqui e escolha a foto do Resíduo" onPress={this._pickImage} >
                  <Text style={styles.textBtn}>
                    Escolher foto do Resíduo
                  </Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 150 }} />}
              </View>
            </View>
            <Text>
              {'\n'}
            </Text>

            {/* <Text style={{ color: "blue" }}>    Descrição do resíduo</Text> */}
            <TextInput
              placeholder="   Descrição do resíduo"
              name="DescResiduo"
              value={DescResiduo}
              onChangeText={this.handleDescResiduoChange}
              style={{
                height: 40, borderColor: 'black', backgroundColor: "white",
                borderBottomWidth: 1.0,
                borderRadius: 30,
              }} />
            <Text>
              {'\n'}
            </Text>
            <TouchableOpacity
              title="Publicar resíduo"
              onPress={() => this.postData('POST Button Click')}
              style={styles.button} >
              <Text style={styles.textBtn}>
                Publicar resíduo
              </Text>
            </TouchableOpacity>
            <Text>
              {'\n'}
              {'\n'}
            </Text>
          </View>
          <Text>
            {'\n'}
            {'\n'}
          </Text>
          <View style={{ backgroundColor: '#32CD32', borderWidth: "20px", borderColor: "#32CD32" }}>
            <Button
              color="#32CD32"
              title="Encontrar coletor ou área de descarte"
              onPress={() => this.postData('POST Button Click')}
              style={{ borderBottomWidth: 1.0, borderRadius: 30 }} />
          </View>
          <Text>
            {'\n'}
            {'\n'}
          </Text>
          <View style={{ backgroundColor: '#32CD32', borderWidth: "20px", borderColor: "#32CD32" }}>
            <Button
              color="#32CD32"
              title="Obter informações e dicas sobre um resíduo"
              onPress={() => this.postData('POST Button Click')}
              style={{ borderBottomWidth: 1.0, borderRadius: 30 }} />
          </View>
          <Text>
            {'\n'}
            {'\n'}
          </Text>
          <View style={{ backgroundColor: '#32CD32', borderWidth: "20px", borderColor: "#32CD32" }}>
            <Button
              color="#32CD32"
              title="Publicar dúvidas sobre um resíduo"
              onPress={() => this.postData('POST Button Click')}
              style={{ borderBottomWidth: 1.0, borderRadius: 30 }} />
          </View>
          <Text>
            {'\n'}
            {'\n'}
          </Text>
          <View style={{ backgroundColor: '#32CD32', borderWidth: "20px", borderColor: "#32CD32" }}>
            <Button
              color="#32CD32"
              title="Publicar interesse em entregar resíduo para coleta"
              onPress={() => this.postData('POST Button Click')}
              style={{ borderBottomWidth: 1.0, borderRadius: 30 }} />
          </View>
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
    width: 260,
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