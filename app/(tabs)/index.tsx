import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';import globalStyles from "../styles/global";
import { NavigationContainer } from '@react-navigation/native';

export default function HomeScreen( navigation: any ) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.logoContainer}>
        <Image
          //source={require('./pathtologo')}
          style={globalStyles.logo}
        />
      </View>
      <TouchableOpacity
        style={globalStyles.playButton}
        onPress={()=> navigation.navigate('play')}
      >
        <Text style={globalStyles.playButtonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
}
