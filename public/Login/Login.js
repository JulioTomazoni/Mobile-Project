import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth"
import { Authentication } from "../../src/backend/firebase";
import { SafeAreaView,
         Button,
         Text,
         StyleSheet,
         View,
         TouchableOpacity,
         } from "react-native";
import { InputWithLabel } from "../../src/Components"; 

const auth = Authentication;

export default function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigation()

  const handlePress = () => {
    signIn(email, password)
  }

  function signIn(email, password){
 
       signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('Login bem-sucedido! Bem-Vindo ' +user.email);
          navigate.navigate('Home')
          
          setEmail('')
          setPassword('')
        })      
        .catch ((error) => {
          if (error.code == 'auth/invalid-email'){
            console.warn('Email ou senha inválido')  
            console.log('Erro no login:', error.code, error.message);
          } else {
            console.error('Erro ao logar') 
            console.log('Erro no login:', error.code, error.message); 
          }
    })
  };  

  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerTitle}>
        <Text style={style.title}>Controle Patrimônios</Text>
        <Text>___________________________</Text>
        <Text style={{fontWeight: 'bold'}}>
          UTFPR
        </Text>
        
      </View>
      <InputWithLabel 
        label={'Email'}
        valor={email}
        onChangeInput={setEmail}
      />
      <InputWithLabel 
        label={'Senha'}
        valor={password}
        onChangeInput={setPassword}
        ispassword={true}
      />
      <TouchableOpacity 
        style={style.button}
        onPress={() => handlePress()}
      >       
         <Text style={style.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigate.navigate('Cadastro')}
      >
        <Text style={style.text}>Cadastre-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
    )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#87CEFA'
  },
  containerTitle: {
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    height: 60,
    width: 300,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
