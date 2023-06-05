import React, { useState, useEffect } from "react"
import { FlatList, TextInput, View, Text, StyleSheet } from "react-native";
import { onValue } from 'firebase/database'
import { refPatrimonio } from "../../../src/backend/firebase";

export default function CnsPatrimonio(){
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    // Função para buscar os dados do Firebase
    const fetchData = () => {
      onValue(refPatrimonio, (snapshot) => {
        const items = snapshot.val();
        const dataArray = items ? Object.values(items) : [];
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

          <View style={styles.itemContainer}>
            <Text style={styles.titleText}>Patrimônio</Text>
            <Text style={styles.titleText}>Quantidade</Text>
          </View>

        <FlatList
          data={filterData}

          keyExtractor={(item) => item.key}
          renderItem={({ item }) => 
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.patrimonio}</Text>
              <Text style={styles.itemText}>{item.quantidade}</Text>
            </View>
          }
        />
      </View>
      )     
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});