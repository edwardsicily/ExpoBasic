import React, { PropsWithChildren, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SensorElement = ({
  name,
  children,
}: PropsWithChildren<{ name: string }>) => {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        onPress={() => setStatus((prev) => !prev)}
        style={{
          backgroundColor: 'lightgreen',
        }}
      >
        <Text>{status ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>
      <Text>{name}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    gap: 8,
  },
  statusButton: {
    borderRadius: 8,
    padding: 8,
  },
});

export default SensorElement;
