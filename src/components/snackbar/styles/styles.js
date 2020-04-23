import { StyleSheet } from "react-native";

const styles = (props) =>
  StyleSheet.create({
    snackbar: {
      width: "95%",
      height: 60,
      padding: 10,
      elevation: 1,
      borderRadius: 5,
      alignSelf: "center",
      position: "absolute",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: props.backgroundColor,
    },
    positionTop: {
      top: 20,
    },
    widthBig: { width: "80%" },
    messageText: { color: props.messageTextColor },
    widthSmall: { width: "20%", padding: 10 },
    positionBottom: {
      bottom: 20,
    },
    buttonText: {
      color: props.actionTextColor,
      fontWeight: "bold",
      textAlign: "center",
    },
  });

export default styles;
