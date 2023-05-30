import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { REQUISITA_PATRIMONIO, REQUISITA_SALA  } from '../../const'

const Requisitar = (props) => {
  const [requisitaExpanded, setRequisitaExpanded] = useState(false);

  const handleConsultaPress = () => {
    setRequisitaExpanded(!requisitaExpanded);
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Requisição"
        onPress={handleConsultaPress}
        style={{ backgroundColor: '#ddd' }}
        icon={({ color, size }) => (

          <Icon name={requisitaExpanded ? 'chevron-up' : 'chevron-down'} size={size} color={color} />
        )}
      />
      {requisitaExpanded && (
        <View>
          <DrawerItem
            label="Patrimônio"
            onPress={() => props.navigation.navigate(REQUISITA_PATRIMONIO)}
            style={{ marginLeft: 16 }}
          />
          <DrawerItem
            label="Salas"
            onPress={() => props.navigation.navigate(REQUISITA_SALA)}
            style={{ marginLeft: 16 }}
          />
        </View>
      )}
    </DrawerContentScrollView>
  );
}

export default Requisitar;