import React, { useState } from 'react';
import { Post } from '../../../src/backend/controllers/patrimonio/';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, SafeAreaView } from 'react-native';

const ReqPatrimonio = () => {
  const [newRecord, setNewRecord] = useState('');
  const [quantidade, setQuantidade] = useState(0);

  const decrementarQuantidade = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  const incrementarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const handlePress = () => {
    Post({
      patrimonio: newRecord,
      quantidade: quantidade
    }); 
  };

  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: 50 }}
    >
      
      <View style={styles.container}>
        <Text style={styles.text} >Patrimônio</Text>
        <View style={styles.input}>
          <TextInput
            onChangeText={setNewRecord}
            placeholder="Novo Registro"
            style={{textAlign: 'center'}}
          />
        </View>
        <Text style={styles.text} >Quantidade</Text>
        <View style={styles.qtdecontainer}>
          <TouchableOpacity onPress={decrementarQuantidade}>
            <AntDesign name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantidadeText}>{quantidade}</Text>
          <TouchableOpacity onPress={incrementarQuantidade}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
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

export default ReqPatrimonio;
