import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';import globalStyles from "../styles/global";
import { NavigationContainer } from '@react-navigation/native';
import { Link } from 'expo-router';

export default function HomeScreen( navigation: any ) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.logoContainer}>
        <Image
          //source={require('./pathtologo')}
          style={globalStyles.logo}
        />
      </View>
      <Link href="/play">
        <TouchableOpacity
          style={globalStyles.playButton}
        >
          <Text style={globalStyles.playButtonText}>Play</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
