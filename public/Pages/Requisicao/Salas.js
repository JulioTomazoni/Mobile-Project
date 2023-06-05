import React, { useState } from 'react';
import { Post } from '../../../src/backend/controllers/sala/';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, SafeAreaView } from 'react-native';

const ReqSalas = () => {
  const [newRecord, setNewRecord] = useState('');

  const handlePress = () => {
    Post(newRecord);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: 50 }}
    >      
      <View style={styles.container}>
        <Text style={styles.text} >Sala</Text>
        <View style={styles.input}>
          <TextInput
            onChangeText={setNewRecord}
            placeholder="Novo Registro"
            style={{textAlign: 'center'}}
          />
        </View>
      </View>
      <TouchableOpacity 
        style={styles.buttom}
        onPress={handlePress}
      >
        <Text style={styles.textButtom}>Requisitar</Text>
      </TouchableOpacity>        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  qtdecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    width: 120,
    margin: 5,
  },
  quantidadeText: {
    fontSize: 18,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    margin: 10
  },
  buttom: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  textButtom: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  }
});

export default ReqSalas;
