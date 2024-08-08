import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";
import spacing from "./spacing";
import typography from "./typography";

const { width } = Dimensions.get('window');
const boardSize = width * 0.8;

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  boardContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50,
  },
  logoContainer: {
    margin: 40,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  section: {
    paddingTop: 20,
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: 150,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerprofileinfo: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  body: {
    flex: 5,
    padding: 20,
    //backgroundColor: colors.terciary,
    width: "100%",
  },
  headerimage: {
    width: "100%",
    height: "100%", // Ensure it fills the space
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
  },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: colors.secondary,
    borderRadius: 20,
    margin: 10,
  },
  card_number: {
    fontSize: 24,
    color: "gray",
    textAlign: "center",
  },
  card_label: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
  profile_name: {
    fontSize: 32,
    color: "black",
  },
  text: {
    color: colors.text,
    ...typography.body,
  },
  profileInfo: {
    height: 250,
    paddingVertical: 20,
    flexDirection: "column",
    padding: 20,
  },
  textInput: {
    backgroundColor: colors.background,
    padding: spacing.sm,
    borderRadius: 5,
    margin: spacing.lg,
    ...typography.body,
  },
  headerText: {
    color: colors.text,
    ...typography.body,
    fontSize: 36,
    fontStyle: 'bold',
    marginLeft: 10,
  },
  listText: {
    color: colors.text,
    ...typography.body,
    marginLeft: 20
  },
  listSubText: {
    color: colors.text,
    ...typography.body,
    marginLeft: 40
  },
  welcome: {
    color: colors.text,
    ...typography.body,
    fontSize: 36,
    fontStyle: 'bold',
    justifyContent: 'center',
  },
  board: {
    width: boardSize,
    height: boardSize,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  row: {
    flexDirection: 'row'
  },
  square: {
    flex: 1,
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    fontSize: boardSize / 6,
  },
  status: {
    fontSize: 24,
    marginTop: 60,
  },
  restartGameButtonContainer: {
    marginBottom: 60,
  },
  startGameButtonContainer: {
    marginTop: 60,
  },
});

export default globalStyles;
