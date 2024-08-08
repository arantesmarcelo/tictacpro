import { View, Text, TouchableOpacity, Image } from 'react-native';import globalStyles from "../styles/global";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

export default function HomeScreen( navigation: any ) {

return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={globalStyles.container}>
          <View style={globalStyles.logoContainer}>
            <Image
              //source={require('./pathtologo')}
              style={globalStyles.logo}
            />
          </View>
            <Link href="/play">
              <TouchableOpacity style={globalStyles.playButton}>
                <Text style={globalStyles.playButtonText}>Play</Text>
              </TouchableOpacity>
            </Link>
            <TouchableOpacity style={globalStyles.playButton}>
                <Text style={globalStyles.playButtonText}>Signup/Login</Text>
            </TouchableOpacity>
        </View>
    </GestureHandlerRootView>
  );
}
