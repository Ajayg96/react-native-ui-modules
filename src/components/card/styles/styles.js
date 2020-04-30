import { StyleSheet } from "react-native";
import { shadow } from "../../../static/constants";

const styles = (props) =>
  StyleSheet.create({
    card: {
      ...shadow,
      padding: 10,
      alignSelf: "center",
      width: props.cardWidth,
      flexDirection: "column",
      borderRadius: props.cardBorder,
      backgroundColor: props.cardColor,
    },
  });

export default styles;
