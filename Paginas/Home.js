import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native-elements'

class HomeScreen extends React.Component {

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

                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={this.buttonPress}
                />
            </View>
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
