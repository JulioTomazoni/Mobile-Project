import 'react-native-gesture-handler';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Consultar from './Consultar'
import Requisitar from './Requisitar'
import { Logout } from '../../public/Login/';
import { View } from 'react-native';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{flex: 1}}
    >
      <DrawerItemList {...props} 
        style={{borderWidth:1}}
      />
      <View style={{flex:1,marginVertical:20,}}>
        <Requisitar/>
        <Consultar/>
        <Logout/>
      </View>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;