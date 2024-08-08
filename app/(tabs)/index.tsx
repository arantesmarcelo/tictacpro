import "./firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';import globalStyles from "../styles/global";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Link } from 'expo-router';
import { useReducer, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen( navigation: any ) {
  const [showAuth, setShowAuth] = useState(false);
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const auth = getAuth();
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        onChangeLoggedInUser(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  }

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        onChangeLoggedInUser(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={globalStyles.container}>
          <View style={globalStyles.logoContainer}>
            <Image
              //source={require('./pathtologo')}
              style={globalStyles.logo}
            />
          </View>
          {!showAuth ? (
            <>
              <Link href="/play">
                <TouchableOpacity style={globalStyles.playButton}>
                  <Text style={globalStyles.playButtonText}>Play</Text>
                </TouchableOpacity>
              </Link>
              <TouchableOpacity 
                style={globalStyles.playButton}
                onPress={() => setShowAuth(true)}
              >
                  <Text style={globalStyles.playButtonText}>Signup/Login</Text>
              </TouchableOpacity>
            </>
          ) : (
            <View style={globalStyles.container}>
              <TextInput
                style={globalStyles.textInput}
                onChangeText={onChangeEmail}
                value={email}
                keyboardType='email-address'
              />
              <TextInput
                style={globalStyles.textInput}
                value={password}
                secureTextEntry={true}
              />
              <View style={globalStyles.playButton}>
                <TouchableOpacity 
                  style={globalStyles.playButton}
                  onPress={() => createUser()}
                >
                    <Text style={globalStyles.playButtonText}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={globalStyles.playButton}
                  onPress={() => login()}
                >
                  <Text style={globalStyles.playButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
    </GestureHandlerRootView>
  );
}
