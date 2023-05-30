import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth"
import { SafeAreaView,
         Button,
         Text,
         StyleSheet,
         View,
         TouchableOpacity,
         } from "react-native";
import { InputWithLabel } from "../../src/Components"; 

const auth = getAuth()

export default function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function signIn(email, password){

       createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('Login bem-sucedido! Bem-Vindo ' +user.displayName);
          // Você pode executar ações adicionais após o login, como redirecionar o usuário para outra tela
        })      
        .catch ((error) => {
          console.log('Erro no login:', error.message); 
    })
      // Lide com o erro de login, exiba uma mensagem de erro ou tome outras ações apropriadas
  };  

  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerTitle}>
        <Text style={style.title}>Consulta de Patrimônios</Text>
        <Text style={style.title}>Reservas de Salas</Text>
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
      />
      {/* <TouchableOpacity style={style.button}> */}
        <Button 
        style={style.buttonText}
        onPress={signIn(email, password)}
        title="Login"
        >        
           
        </Button>
      {/* </TouchableOpacity> */}
      <TouchableOpacity>
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
    borderRadius: 10,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 120,
    height: 45,
    backgroundColor: '#fff',
    textDecorationColor: '#8BC34A',
    borderColor: '#8BC34A',
  },
  buttonText: {
    color: '#8BC34A',
    fontWeight: "bold", 
    textAlign: 'center',
  }
})
