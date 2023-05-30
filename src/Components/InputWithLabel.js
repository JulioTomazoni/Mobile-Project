import React from "react";
import { Text, 
         TextInput, 
         View,
         StyleSheet
        } from "react-native";

export default function InputWithLabel({label, onChangeInput, valor}){
  const [text, onChangeText] = React.useState('');  
  return (
    <View style={style.container}>
      <Text>{label}</Text>
      <TextInput 
      value={valor}
      onChangeText={onChangeInput}
      style={style.input}
      />
    </View>
    )
};

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    height: 40,
  },
});