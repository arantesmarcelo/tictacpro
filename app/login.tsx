import { Button, Pressable, Text, TextInput, View } from "react-native";
import globalStyles from "../app/styles/global";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { login } from "../services/auth";

export default function LoginPage({ onLogin }: { onLogin: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = async () => {
    //todo
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const user = await login(email, password);
      if (user) {
        //todo: email verification
      }
    } catch (error: any) {
      setLoading(false);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        alert("Invalid email or password");
      } else if (error.code === "auth/too-many-requests") {
        alert("Too many requests. Try again later");
      } else {
        alert("An error occurred. Try again later");
      }
    }
  };

  return (
    <View style={{ backgroundColor: "blue" }}>
      <Text style={globalStyles.text}>To do: Login</Text>
      <View>
        <Text>Username</Text>
        <TextInput placeholder="username"></TextInput>
        <Text>Password</Text>
        <TextInput placeholder="password"></TextInput>
        <Pressable>Login</Pressable>
      </View>
    </View>
  );
}
