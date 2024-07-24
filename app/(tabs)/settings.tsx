import { Text, View } from "react-native";
import globalStyles from "../styles/global";
import { Button } from "@ant-design/react-native";

export default function Settings({ onLogout }: { onLogout: any }) {
  const handleLogout = (value: boolean) => {
    onLogout(value);
  };

  return (
    <View style={globalStyles.container}>
      <Text>To do: Settings</Text>
      <Button onPress={() => handleLogout(false)} type="primary">
        Logout
      </Button>
    </View>
  );
}
