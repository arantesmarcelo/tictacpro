import React from "react";
import { FlatList, Text, View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import globalStyles from "../styles/global";
import { Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const settingsOptions = [
  { id: '1', title: 'Sound' },
  { id: '2', title: 'Notifications' },
  { id: '3', title: 'Theme' },
  // Add more settings options here as needed
];

export default function Settings() {


  const navigator = useNavigation();
  
  const handleLogout = () => {
    // TODO Implement logout logic here;
    Alert.alert('Successfully loogged out');
  };

  const renderItem = ({ item }: {item : any}) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginTop: 50, ...globalStyles.profileInfo}}>
      <FlatList
        data={settingsOptions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
});
