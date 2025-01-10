import React, { useState, useEffect } from 'react';
import { Accelerometer as ExpoAccelerometer } from 'expo-sensors';
import { EventSubscription } from 'expo-modules-core';
import { Text, View } from 'react-native';

const Accelerometer = ({ status }: { status: boolean }) => {
  const [isAvailable, setAvailability] = useState<boolean>(false);
  const [subscription, setSubscription] = useState<EventSubscription | null>(
    null
  );
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });

  const checkAvailability = async () => {
    const { status } = await ExpoAccelerometer.getPermissionsAsync();
    const availability = await ExpoAccelerometer.isAvailableAsync();
    setAvailability(availability && status === 'granted');
  };

  const startAccelerometer = () => {
    if (!status) return;
    setSubscription(ExpoAccelerometer.addListener(setData));
    ExpoAccelerometer.setUpdateInterval(400);
  };

  const stopAccelerometer = () => {
    if (!status) subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    checkAvailability();
  }, [checkAvailability]);

  useEffect(() => {
    return () => stopAccelerometer();
  }, []);

  if (!isAvailable) {
    return <Text>Not Available</Text>;
  }

  if (!subscription) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 4,
      }}
    >
      <Text>x : {x}</Text>
      <Text>y : {y}</Text>
      <Text>z : {z}</Text>
    </View>
  );
};

export default Accelerometer;
