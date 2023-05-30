import React, { useState, useEffect } from "react"
import { FlatList, TextInput, View, Text } from "react-native";
import { onValue } from 'firebase/database'
import { refPatrimonio } from "../../../src/backend/firebase";
import ItemList from "../../../src/Components/ItemList";
import { REQUISITA_PATRIMONIO } from "../../../const";

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
    item.item.toLowerCase().includes(search.toLowerCase())
  );

    return (    
      <View style={{flex: 1, marginTop: 50}}>
        <TextInput
          style={{height: 40, margin: 10, padding: 10, borderColor: 'gray', borderWidth: 1, textAlign: 'center'}}
          placeholder="Digite o patrimônio que deseja buscar..."
          onChangeText={text => setSearch(text)}
          value={search}
        />
        <FlatList
          data={filterData}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => 
          <ItemList  
            style={{fontSize: 18, padding: 10, textAlign: 'center'}}
            id={'Patrimônio:' +item.key}
            valor={item.item}
            component={REQUISITA_PATRIMONIO}
            props={...props}
          />
        }
        />
      </View>
      )
}