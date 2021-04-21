/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect,useState} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import Axios from 'axios'
 import {
   Text,
 } from 'react-native';

 const HomeScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
 
 const App = () => {
 
   useState(()=>{
     Axios.get("https://jsonplaceholder.typicode.com/posts").then(doc=>{
       console.log(doc.data)
     })
   },[])
 
 
   return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
   );
 };
 
 export default App;
 