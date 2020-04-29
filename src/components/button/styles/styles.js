import { StyleSheet } from "react-native";
import { shadow, ThemeColor } from "../../../static/constants";

const button = (props) => ({
  ...shadow,
  padding: 10,
  marginTop: 15,
  marginBottom: 15,
  alignSelf: "center",
  alignItems: "center",
  flexDirection: "row",
  width: props.buttonWidth,
  height: props.buttonHeight,
  borderColor: props.borderColor,
  borderRadius: props.borderRadius,
});

const styles = (props) =>
  StyleSheet.create({
    outlined: {
      ...button(props),
      borderWidth: 1,
      backgroundColor: "transparent",
    },
    contained: {
      ...button(props),
      backgroundColor:
        props.color === "primary"
          ? ThemeColor.primary
          : props.color === "secondary"
          ? ThemeColor.secondary
          : props.color === "default"
          ? ThemeColor.default
          : props.buttonColor,
    },
    button: {
      alignItems: "center",
    },
    buttonTitle: {
      fontSize: 16,
      color: props.titleColor,
    },
    buttonIcon: {
      marginLeft: 0,
      marginRight: 0,
    },
    icon: {
      width: "10%",
    },
  });

export default styles;
