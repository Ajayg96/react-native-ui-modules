import { StyleSheet } from "react-native";

const styles = (props) =>
  StyleSheet.create({
    spinnerContainer: {
      flex: 1,
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#00000080",
    },
    spinner: {
      opacity: 0.9,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:
        Platform.OS === "android" ? props.backgroundColor : "transparent",
    },
  });

export default styles;
