import { View, Text, Button } from "@ant-design/react-native";
import globalStyles from "../app/styles/global";

export default function LoginPage({ onLogin }: { onLogin: any }) {
  
  const handleLogin = (loggedIn: boolean) => () => {
    onLogin(loggedIn);
  }
  
  return (
    <View style={globalStyles.container}>
      <Text>Login Page</Text>
      <Button onPress={handleLogin(true)}>Log In</Button>
    </View>
  );
}
