import 'react-native-gesture-handler';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Consultar from './Consultar'
import Requisitar from './Requisitar'
import { Logout } from '../../public/Login/';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Requisitar/>
      <Consultar/>
      <Logout/>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;