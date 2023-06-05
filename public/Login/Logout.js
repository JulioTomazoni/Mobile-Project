import React from "react";
import { View, Text, Button } from "react-native";
import { Authentication } from "../../src/backend/firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

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
  };

  return (
    <View 
      style={{
        marginLeft: 10,
        marginRight: 10, 
        marginTop: 590,    
      }}
    >
      <TouchableOpacity
        title="Sair"
        
        color={'red'}
        onPress={() => handleLogout()}
        style={{
          backgroundColor: 'red',
          fonteWeight: 'bold',
          paddingTop: 12,
          paddingBottom: 12, 
          borderRadius: 5,  
          
                 
        }}
        
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 16,
          }}
        >
          <Feather name="log-out" size={16} />
          <Text>        Sair</Text>
        </Text>
        
      </TouchableOpacity>
    </View>
  );
}
