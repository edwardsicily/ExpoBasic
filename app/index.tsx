import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import SensorElement from '@/components/SensorElement';

const DATA = [{ name: 'Accelerometer' }] as const;

export default function Index() {
  return (
    <View
      style={{
        padding: 18,
        flex: 1,
      }}
    >
      <FlatList
        data={DATA}
        renderItem={({ item }) => <SensorElement name={item.name} />}
      ></FlatList>
    </View>
  );
}
