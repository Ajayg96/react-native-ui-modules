import { StyleSheet, Platform } from "react-native";

const input = (props) => ({
  marginTop: 15,
  marginBottom: 15,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  height: props.inputHeight,
  width: props.inputWidth,
  paddingTop: Platform.OS === "ios" ? 10 : 0,
  paddingBottom: Platform.OS === "ios" ? 10 : 0,
});

const styles = (props) =>
  StyleSheet.create({
    input: {
      fontSize: 16,
      marginLeft: Platform.OS === "ios" ? 2 : 0,
    },
    outlined: {
      ...input(props),
      borderWidth: 1,
      borderColor: props.borderColor,
      borderRadius: props.borderRadius,
    },
    standard: {
      ...input(props),
      borderBottomWidth: 1,
      borderBottomColor: props.borderBottomColor,
    },
    inputIcon: {
      marginRight: 5,
      marginLeft: 5,
    },
    icon: {
      width: "10%",
    },
    multlineInput: {
      textAlignVertical: "top",
    },
  });

export default styles;
