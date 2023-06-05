import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { DrawerItem  } from '@react-navigation/drawer';
import { View } from 'react-native';
import { REQUISITA_PATRIMONIO, REQUISITA_SALA  } from '../../const'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Requisitar = () => {
  const [requisitaExpanded, setRequisitaExpanded] = useState(false);

  const handleRequicaoPress = () => {
    setRequisitaExpanded(!requisitaExpanded);
  };

  const navigate = useNavigation();

  return (
      <View>
        <DrawerItem
          label="Requisição"
          onPress={handleRequicaoPress}
          style={{ backgroundColor: '#ddd' }}
          icon={({ color, size }) => (

            <Feather name={requisitaExpanded ? 'chevron-up' : 'chevron-down'} size={size} color={color} />
          )}
        />
        {requisitaExpanded && (
          <View>
            <DrawerItem
              label="Patrimônio"
              onPress={() => navigate.navigate(REQUISITA_PATRIMONIO)}
              style={{ marginLeft: 16 }}
              icon={({ color }) => <Feather name="package" size={20} color={color} />}
            />
            <DrawerItem
              label="Salas"
              onPress={() => navigate.navigate(REQUISITA_SALA)}
              style={{ marginLeft: 16 }}
              icon={({ color }) => <Feather name="book" size={20} color={color} />}
            />
          </View>
        )}
      </View>
  );
}

export default Requisitar;