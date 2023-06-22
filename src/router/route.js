import 'react-native-gesture-handler';
import React from 'react';
import { DrawerRouter, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import { CONSULTA_PATRIMONIO, REQUISITA_PATRIMONIO,
         CONSULTA_SALA, REQUISITA_SALA  } from '../../const'
import { DrawerContent } from '../Components';
import HomePage from '../Home/HomePage.js';
import { CnsPatrimonio, CnsSalas } from '../../public/Pages/Consulta'
import { ReqPatrimonio, ReqSalas } from '../../public/Pages/Requisicao';
import { Login, Register } from '../../public/Login';
import '../backend/firebase'

const Drawer = createDrawerNavigator();

export default function Routes() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Login'
        drawerContent={(props) =>          
          <DrawerContent {...props}/>          
        }
      >
        <Drawer.Screen
          name='Login'
          component={Login}
          options={{
            drawerItemStyle: {display: 'none'},
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name='Cadastro'
          component={Register}
          options={{
            drawerItemStyle: {display: 'none'},
            headerShown: false,
          }}
        />        
        <Drawer.Screen 
          name='Home' 
          component={HomePage}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color }) => <Feather name="home" size={20} color={color} />,
          }}
          />   
        <Drawer.Screen 
          name={CONSULTA_PATRIMONIO}
          component={CnsPatrimonio} 
          

          options={{
            drawerItemStyle: {display: 'none'},
            drawerLabel: 'Patrimônio',
          }}            
        />    
        <Drawer.Screen 
          name={CONSULTA_SALA} 
          component={CnsSalas}
          options={{
            drawerItemStyle: {display: 'none'}
          }}
        />
        <Drawer.Screen 
          name={REQUISITA_PATRIMONIO}
          component={ReqPatrimonio} 
          options={{
            drawerItemStyle: {display: 'none'}
          }}            
        />         
        <Drawer.Screen 
          name={REQUISITA_SALA}
          component={ReqSalas}
          options={{
            drawerItemStyle: {display: 'none'}
          }}
        />    
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}