import React, { useState, useEffect } from "react"
import { FlatList, TextInput, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { onValue } from 'firebase/database'
import { refSala } from "../../../src/backend/firebase";
import { Feather } from '@expo/vector-icons';
import { Delete } from "../../../src/backend/controllers/sala";

export default function CnsSalas(){
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [key, setKey] = useState([])

  useEffect(() => {
    // Função para buscar os dados do Firebase
    const fetchData = () => {
      onValue(refSala, (snapshot) => {
        const items = snapshot.val();
        const dataArray = items ? Object.values(items) : [];
        setKey(items);
        setData(dataArray);
      });
    };

    fetchData();
  }, []);

  const filterData = data.filter((item) =>
    item.sala.includes(search)
  );

    return (    
      <View style={{flex: 1, marginTop: 50}}>
        <TextInput
          style={{height: 40, margin: 10, padding: 10, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
          placeholder="Digite a sala que deseja buscar..."
          onChangeText={text => setSearch(text)}
          value={search}
        />

        <View style={styles.container}>
          <Text style={styles.titleText}>Sala</Text>
          <FlatList
            data={filterData}
            renderItem={( item ) => (
              <View style={styles.itemContainer}>
                <View style={styles.itemContent}>
                  <View style={styles.textContainer}>
                    <Text style={styles.itemText}>{item.item.sala}</Text>
                  </View>
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
              </View>
            )}
          />
        </View>

      </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 20,
    alignSelf: 'center',
  },
  itemContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    alignSelf: 'center',
  },
  button: {
    marginLeft: 10,
  },
});
