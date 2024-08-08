import { Text, TextInput, View } from "react-native";
import globalStyles from "../styles/global";
import typography from "../styles/typography";
import { Avatar, Card, Image } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Profile() {
  const username = "John Doe";

  return (
    <View id="main-container" style={globalStyles.container}>
      <View id="header" style={globalStyles.header}>
        <Image
          source={{ uri: "https://picsum.photos/id/157/2592/1936" }}
          style={globalStyles.headerimage}
        />
        <LinearGradient
          colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]}
          style={globalStyles.headerprofileinfo}
        >
          <Avatar
            size={96}
            rounded
            source={{ uri: "https://avatar.iran.liara.run/public/2" }}
          />
          <Text style={typography.header}>{username}</Text>
        </LinearGradient>
      </View>

      <View id="body" style={globalStyles.body}>
        <View id="card" style={globalStyles.cardContainer}>
          <Card containerStyle={globalStyles.card}>
            <Ionicons
              style={{ textAlign: "center" }}
              name="trophy"
              size={24}
              color="gold"
            />
            <Text style={{ textAlign: "center", ...typography.body }}>00</Text>
            <Text style={{ textAlign: "center", ...typography.body }}>
              victories
            </Text>
          </Card>
          <Card containerStyle={globalStyles.card}>
            <Ionicons
              style={{ textAlign: "center" }}
              name="glasses"
              size={24}
              color="green"
            />
            <Text style={{ textAlign: "center", ...typography.body }}>00</Text>
            <Text style={{ textAlign: "center", ...typography.body }}>
              draws
            </Text>
          </Card>
          <Card containerStyle={globalStyles.card}>
            <Ionicons
              style={{ textAlign: "center" }}
              name="balloon"
              size={24}
              color="red"
            />
            <Text style={{ textAlign: "center", ...typography.body }}>00</Text>
            <Text style={{ textAlign: "center", ...typography.body }}>
              defeats
            </Text>
          </Card>
        </View>
        <View id="personal-info" style={globalStyles.profileInfo}>
          <Text style={typography.label}>First name</Text>
          <TextInput style={typography.input}>
            {username.split(" ")[0]}
          </TextInput>
          <Text style={typography.label}>Last name</Text>
          <TextInput style={typography.input}>
            {username.split(" ")[1]}
          </TextInput>
          {/* <Text style={typography.label}>Password</Text>
          <TextInput
            style={typography.input}
            textContentType="password"
            secureTextEntry={true}
            placeholder="password"
          ></TextInput> */}
        </View>
      </View>
    </View>
  );
}
