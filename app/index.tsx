import { Image, Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        padding: 18,
        gap: 24,
        justifyContent: `center`,
        alignItems: `center`,
        flex: 1,
      }}
    >
      <Image
        source={require('../assets/images/react-logo.png')}
        style={{ width: 100, height: 100 }}
      />

      <Text>Welcome to Expo Basic.. your favourite starting point</Text>
    </View>
  );
}
