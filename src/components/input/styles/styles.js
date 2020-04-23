import { StyleSheet } from "react-native";

const styles = (props) =>
  StyleSheet.create({
    input: {
      fontSize: 15,
      marginBottom: 20,
      alignSelf: "center",
      width: props.inputWidth,
    },
    outlined: {
      paddingLeft: 15,
      borderWidth: 1,
      height: props.height,
      borderColor: props.borderColor,
      borderRadius: props.borderRadius,
    },
    standard: {
      borderBottomWidth: 1,
      borderBottomColor: props.borderBottomColor,
    },
    multlineInput: {
      textAlignVertical: "top",
    },
  });

export default styles;
