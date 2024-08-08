import React, { useState } from "react";
import {
  Button,
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { login } from "../services/auth";

export default function LoginPage({ onLogin }: { onLogin: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = async () => {
    // todo: Implement sign-up logic
  };

  const handleLogin = async () => {
    setLoading(true);
    onLogin(true);
    try {
      const user = await login(email, password);
      if (user) {
        // todo: email verification
        onLogin(true);
      }
    } catch (error: any) {
      setLoading(false);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        Alert.alert("Invalid email or password");
      } else if (error.code === "auth/too-many-requests") {
        Alert.alert("Too many requests. Try again later");
      } else {
        Alert.alert("An error occurred. Try again later");
      }
    }
  };

  return (
    <View style={localStyles.container}>
      <Text style={localStyles.label}>Login</Text>
      <View style={localStyles.form}>
        <Text style={localStyles.text}>Email</Text>
        <TextInput
          style={localStyles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <Text style={localStyles.text}>Password</Text>
        <TextInput
          style={localStyles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <Pressable style={localStyles.button} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={localStyles.buttonText}>Login</Text>
          )}
        </Pressable>
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Added a background color for better contrast
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Changed to a darker color for better readability
    marginBottom: 20,
  },
  form: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000", // Added shadow for better visual separation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Added elevation for Android shadow
  },
  text: {
    fontSize: 16,
    color: "#333", // Darker color for text
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: "#4A90E2", // Updated button color
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white", // Changed to white for contrast against button color
    fontSize: 16,
  },
});
