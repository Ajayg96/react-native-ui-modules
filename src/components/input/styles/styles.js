import { StyleSheet } from "react-native";

const input = (props) => ({
  marginTop: 15,
  marginBottom: 15,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  height: props.inputHeight,
  width: props.inputWidth,
});

const styles = (props) =>
  StyleSheet.create({
    input: {
      fontSize: 16,
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
      marginLeft: 5,
      marginRight: 5,
    },
    icon: {
      width: "10%",
    },
    multlineInput: {
      textAlignVertical: "top",
    },
  });

export default styles;
