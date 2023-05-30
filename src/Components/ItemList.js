import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ItemList({id, valor, props, component, style}){

  return (
    <SafeAreaView
      style={style}
      onPress={() => props.navigation.navigate(component)}
    >
      <TouchableOpacity>
        <Text> {id}   {valor} </Text>
      </TouchableOpacity>
    </SafeAreaView>
    )

}