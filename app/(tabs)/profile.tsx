import { Text, View } from "react-native";
import globalStyles from "../styles/global";
import { Avatar } from '@rneui/themed';

export default function Profile() {
  return (
    <View style={globalStyles.container}>
      <Text>To do: Profile PAGE</Text>
      <Avatar
        size="large"
        source={{
          uri: 'https://avatars.githubusercontent.com/u/14052875?v=4',
        }}
      />
    </View>
  );
}
