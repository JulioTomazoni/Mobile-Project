import React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native-safe-area-context";

import { itemList } from "../assets/Styles/styles";

export default function ItemList({id, valor, route}){
  

  return (
    <SafeAreaView
      style={itemList.container}
      onPress={() => navigate.navigate(route)}
    >
      <TouchableOpacity>
        <Text> {id}   {valor} </Text>
      </TouchableOpacity>
    </SafeAreaView>
    )

}