import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = ({text}) => {
  return (
    <View>
      <Text style={style.title}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Title;
