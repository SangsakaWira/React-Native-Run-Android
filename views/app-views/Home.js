/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect,useState} from 'react';
 import Axios from 'axios'
 import {
   SafeAreaView,
   Text,
   useColorScheme,
 } from 'react-native';
 
 import {
   Colors
 } from 'react-native/Libraries/NewAppScreen';
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   useState(()=>{
     Axios.get("https://jsonplaceholder.typicode.com/posts").then(doc=>{
       console.log(doc.data)
     })
   },[])
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <Text>Tes World</Text>
     </SafeAreaView>
   );
 };
 
 export default App;
 