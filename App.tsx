import {Text, View, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Title from './src/components/Title';
import Input from './src/components/Input';

const App = () => {
  return (
    <View>
      <Title />
      <ScrollView>
        <Input placeholder="Search here"/>
        <Input placeholder="Enter your name"/>
        <Input placeholder="Enter your email"/>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
          <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
        </View>
      <Image source={require('./assets/onepiece.jpg')}
      style={{width: 400, height: 400}}/>
      {/* <Image source={}></Image> */}
      {/* <Image
        source={{uri:'https://reactnative.dev/'}}
        style={{width: 200, height: 200}} 
      /> */}
      <Text style={style.title}>
      Hello World
      </Text>

    </ScrollView>
    </View>
  );
};

const style = StyleSheet.create ({
  backgroundBody: {
    flexGrow: 1,
    backgroundColor: 'grey',
    padding: 20,
  },
});

export default App;