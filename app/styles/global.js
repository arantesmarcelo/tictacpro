import { StyleSheet } from "react-native";
import colors from "./colors";
import spacing from "./spacing";
import typography from "./typography";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: colors.secondary,
    borderRadius: 20,
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
    justifyContent: "space-between",
  },
  textInput: {
    backgroundColor: colors.background,
    padding: spacing.sm,
    borderRadius: 5,
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
  }
});

export default globalStyles;
