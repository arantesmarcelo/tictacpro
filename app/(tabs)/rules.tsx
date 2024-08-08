import { Text, View, ScrollView, FlatList } from 'react-native';
import globalStyles from '../styles/global';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from '@rneui/base';


export default function Rules() {
  return (
    <ScrollView style={globalStyles.scrollContainer}>
      <View id="header" style={globalStyles.section}>
        <Ionicons
          style={{ marginLeft: 10 }}
          name="apps-sharp"
          size={44}
          color="blue"
        />
        <Text style={globalStyles.headerText}>TicTacPro Rules</Text>
        <Text style={globalStyles.listText}>TicTacPro follows the same rules as any regular game of Tic-Tac-Toe. But just in case you forgot, we'll fill you in below!</Text>
      </View>
      <View id="objectives" style={globalStyles.section}>
        <Ionicons
          style={{ marginLeft: 10 }}
          name="game-controller"
          size={44}
          color="blue"
        />
        <Text style={globalStyles.headerText}>Objectives</Text>
        <Text style={globalStyles.listText}>1. TicTacPro is played on a 3x3 square grid.</Text>
        <Text style={globalStyles.listText}>2. Upon starting a game, one player will be assigned 'X' and the other player will be assigned 'O'.</Text>
        <Text style={globalStyles.listText}>3. Players will then take turns placing their marks on the board, with the player assigned 'X" going first.</Text>
        <Text style={globalStyles.listText}>4. The game ends under 2 conditions, either:</Text>
        <Text style={globalStyles.listSubText}>a. One player gets 3 of their marks in a row (Horizontal, Vertical, or Diagonal). The player who completes their row first wins the game.</Text>
        <Text style={globalStyles.listSubText}>b. The board is filled before any player can make a line. This results in a draw.</Text>
      </View>
      <View id="navigation" style={globalStyles.section}>
        <Ionicons
            style={{ marginLeft: 10, marginTop:10}}
            name="phone-portrait"
            size={44}
            color="blue"
          />
        <Text style={globalStyles.headerText}>How To Use The App</Text>
        <Text style={globalStyles.listText}>TicTacPro's main functionality is the play feature. This will allow you to start a new game of TicTacToe against an opponent.</Text>
        <Text style={globalStyles.listText}>To start a new game click on the 'Home' page in the navigation bar and select 'Play'.</Text>
        <Text style={globalStyles.listText}>Good luck, and thank you for playing TicTacPro!</Text>
      </View>
    </ScrollView>
  );
}
