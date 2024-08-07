import { Text, TextInput, View } from "react-native";
import globalStyles from "../styles/global";
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
            size={64}
            rounded
            title={username
              .split(" ")
              .map((n) => n[0])
              .join("")}
            titleStyle={{ fontSize: 24 }}
            containerStyle={{ backgroundColor: "gray" }}
          />
          <Text style={globalStyles.profile_name}>{username}</Text>
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
            <Text style={globalStyles.card_number}>00</Text>
            <Text style={globalStyles.card_label}>victories</Text>
          </Card>
          <Card containerStyle={globalStyles.card}>
          <Ionicons
              style={{ textAlign: "center" }}
              name="glasses"
              size={24}
              color="green"
            />
            <Text style={globalStyles.card_number}>00</Text>
            <Text style={globalStyles.card_label}>draws</Text>
          </Card>
          <Card containerStyle={globalStyles.card}>
          <Ionicons
              style={{ textAlign: "center" }}
              name="balloon"
              size={24}
              color="red"
            />
            <Text style={globalStyles.card_number}>00</Text>
            <Text style={globalStyles.card_label}>defeats</Text>
          </Card>
        </View>
        <View id="personal-info" style={globalStyles.profileInfo}>
          <Text>First name</Text>
          <TextInput style={globalStyles.textInput}></TextInput>
          <Text>Last name</Text>
          <TextInput style={globalStyles.textInput}></TextInput>
          <Text>Password</Text>
          <TextInput style={globalStyles.textInput}></TextInput>
        </View>
      </View>
    </View>
  );
}
