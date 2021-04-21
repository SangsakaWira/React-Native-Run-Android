import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import React, {useEffect,useState} from 'react';
import Axios from 'axios'


const Item = ({ title,body }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.bodyTitle}>{body}</Text>
  </View>
);

const App = () => {

  const [data,setData] = useState([])

  useEffect(()=>{
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(doc=>{
      console.log(doc.data[0].body)
      setData(doc.data)
    })
  },[])

  const renderItem = ({ item }) => (
    <Item title={item.title} body={item.body} />
  );

  return (
    <SafeAreaView style={styles.container}>
        <Text>Mantap</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  }, 
  bodyTitle: {
    fontSize: 8,
  },
});

export default App;