import React, { useState, useEffect } from "react"
import { FlatList, TextInput, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { onValue } from 'firebase/database'
import { refPatrimonio } from "../../../src/backend/firebase";
import { Feather } from '@expo/vector-icons';
import { Delete } from "../../../src/backend/controllers/patrimonio";

export default function CnsPatrimonio(){
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [key, setKey] = useState([])

  useEffect(() => {
    // Função para buscar os dados do Firebase
    const fetchData = () => {
      onValue(refPatrimonio, (snapshot) => {
        const items = snapshot.val();
        const dataArray = items ? Object.values(items) : [];
        setKey(items);
        setData(dataArray);
      });
    };

    fetchData();
  }, []);

  const filterData = data.filter((item) =>
    item.patrimonio.includes(search)
  );

    return (    
      <View style={{flex: 1, marginTop: 50}}>
        <TextInput
          style={{height: 40, margin: 10, padding: 10, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
          placeholder="Digite o patrimônio que deseja buscar..."
          onChangeText={text => setSearch(text)}
          value={search}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.titleTextLeft}>Patrimônio</Text>
          <Text style={styles.titleTextCenter}>Quantidade</Text>
          <Text style={styles.titleTextRight}>Excluir</Text>
        </View>

        <FlatList
          data={filterData}
          renderItem={( item ) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemTextLeft}>{item.item.patrimonio}</Text>
              <Text style={styles.itemTextLeft}>{item.item.quantidade}</Text>
              <TouchableOpacity
                onPress={() => {
                  const chave = Object.keys(key);
                  Delete(chave[item.index]);
                }}
                style={styles.button}
              >
                <Feather name="trash" size={20} color={'red'} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      )     
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  titleTextLeft: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  titleTextCenter: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleTextRight: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  itemTextLeft: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
  },
  itemTextCenter: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    marginLeft: 10,
  },
});
