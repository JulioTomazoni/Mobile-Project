import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { CONSULTA_PATRIMONIO, CONSULTA_SALA} from '../../const'

const Consultar = (props) => {
  const [consultaExpanded, setConsultaExpanded] = useState(false);

  const handleConsultaPress = () => {
    setConsultaExpanded(!consultaExpanded);
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Consulta"
        onPress={handleConsultaPress }
        style={{ backgroundColor: '#ddd' }}
        icon={({ color, size}) => (

          <Feather name={consultaExpanded ? 'chevron-up' : 'chevron-down'} size={size} color={color} />
        )}
      />
      {consultaExpanded &&  (
        <View>
          <DrawerItem
            label="Patrimônio"
            onPress={() => props.navigation.navigate(CONSULTA_PATRIMONIO)}
            style={{ marginLeft: 16 }}
            icon={({ color }) => <Feather name="codesandbox" size={20} color={color} />}
          />
          <DrawerItem
            label="Salas"
            onPress={() => props.navigation.navigate(CONSULTA_SALA)}
            style={{ marginLeft: 16 }}
          />
        </View>
      )}
    </DrawerContentScrollView>
  );
}

export default Consultar;