// // import React from 'react';
// import * as React from 'react';
// import { FlatList, ActivityIndicator, Text, View } from 'react-native';
// import { Header } from 'react-native-elements'

// class retornoDados extends React.Component {
//     constructor(props){
//         super(props);
//         this.state ={ isLoading: true}
//       }

//       componentDidMount(){
//         return fetch('https://reactnative.dev/movies.json')
//           .then((response) => response.json())
//           .then((responseJson) => {

//             this.setState({
//               isLoading: false,
//               dataSource: responseJson.movies,
//             }, function(){
//     debugger;
//             });

//           })
//           .catch((error) =>{
//             console.error(error);
//           });
//       }



//       render(){

//         if(this.state.isLoading){
//           return(
//             <View style={{flex: 1, padding: 20}}>
//               <ActivityIndicator/>
//             </View>
//           )
//         }

//         return(
//           <View style={{flex: 1, paddingTop:20}}>
//             <FlatList
//               data={this.state.dataSource}
//               renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//               keyExtractor={({id}, index) => id}
//             />
//           </View>
//         );
//       }
// }

// export default retornoDados;

// import React from 'react';
// import * as React from 'react';
// import { FlatList, ActivityIndicator, Text, View } from 'react-native';
// import { Header } from 'react-native-elements'

// class retornoDados extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isLoading: true }
//   }

//   componentDidMount() {
//     return fetch('http://localhost:51544/Livros2/Details/1')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         console.log(responseJson);

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson,
//         }, function () {
//           console.log(responseJson);
//           debugger;
//         });

//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }



//   render() {

//     if (this.state.isLoading) {
//       return (
//         <View style={{ flex: 1, padding: 20 }}>
//           <ActivityIndicator />
//         </View>
//       )
//     }

//     return (
//       <View style={{ flex: 1, paddingTop: 20 }}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={({ id }, index) => id}
//         />
//       </View>
//     );
//   }
// }

// export default retornoDados;


import * as React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import { Header } from 'react-native-elements'

class RetornoDados extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}

export default RetornoDados;
