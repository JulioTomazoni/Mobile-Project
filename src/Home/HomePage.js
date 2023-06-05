import React from "react";
import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

export default function HomePage(){

  return (
      <View style={styles.container} >
        <View>          
          <Text 
            style={{
              top: 0,
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 20,
            }}
          >Seja bem vindo ao UTFPR Patrimônios</Text>
        </View>

        <View style={styles.innerContainer}  >          
          <Text style={styles.text} >Requisite seus Patrimônios</Text>
          <Text style={styles.text} >
            &
          </Text>
          <Text style={styles.text} >Reserve suas Salas</Text>
        </View>
      </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})