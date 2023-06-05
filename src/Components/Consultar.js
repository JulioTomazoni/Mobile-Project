import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { CONSULTA_PATRIMONIO, CONSULTA_SALA} from '../../const'
import { useNavigation } from '@react-navigation/native';

const Consultar = () => {
  const [consultaExpanded, setConsultaExpanded] = useState(false);

  const handleConsultaPress = () => {
    setConsultaExpanded(!consultaExpanded);
  };

  const navigate = useNavigation();

  return (
    <View>
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
            onPress={() => navigate.navigate(CONSULTA_PATRIMONIO)}
            style={{ marginLeft: 16 }}
            icon={({ color }) => <Feather name="package" size={20} color={color} />}
          />
          <DrawerItem
            label="Salas"
            onPress={() => navigate.navigate(CONSULTA_SALA)}
            style={{ marginLeft: 16 }}
            icon={({ color }) => <Feather name="book" size={20} color={color} />}
          />
        </View>
      )}
    </View>
  );
}

export default Consultar;