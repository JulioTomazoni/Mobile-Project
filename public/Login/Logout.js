import React from "react";
import { View, StyleSheet } from "react-native";
import { Authentication } from "../../src/backend/firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { DrawerItem } from "@react-navigation/drawer";

export default function Logout(){
  const auth = Authentication;
  const navigate = useNavigation()

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Logout bem-sucedido');
        navigate.navigate('Login');
      })
      .catch(error => {
        console.log('Erro ao fazer logout:', error);
      });  
  }

  return (
    <View style={styles.container}>
      <DrawerItem
        label={'Logout'}
        onPress={() => handleLogout()}
        style={styles.logoutButton}
        
        icon={({ color, size}) => (

          <Feather name={'log-out'} size={size} color={'black'} />
        )}
      >
      </DrawerItem>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: 'red',
    fontWeight: 'bold',
  },
});