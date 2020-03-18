import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Header } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class DetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress() {
        console.log('called');
        this.props.navigation.navigate('Details');
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />


                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')} />
                <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
                <Button title="retorno Dados" onPress={() => this.props.navigation.push('retornoDados')} />
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
                <Button
                    title="Go back to first screen in stack"
                    onPress={() => this.props.navigation.popToTop()}
                />
            </View>
        );
    }
}

export default DetailsScreen;