import { StyleSheet } from "react-native";
import { shadow } from "../../../static/constants";

const styles = (props) =>
  StyleSheet.create({
    card: {
      ...shadow,
      padding: 10,
      alignSelf: "center",
      width: props.cardWidth,
      height: props.cardHeight,
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: props.cardBorder,
      backgroundColor: props.cardColor,
    },
  });

export default styles;
