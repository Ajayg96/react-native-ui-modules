import { StyleSheet } from "react-native";
import { shadow } from "../../../static/constants";

const styles = (props) =>
  StyleSheet.create({
    rowContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    accordion: {
      ...shadow,
      padding: 10,
      marginTop: 15,
      marginBottom: 15,
      alignSelf: "center",
      width: props.width,
      flexDirection: "column",
      justifyContent: "flex-start",
      backgroundColor: props.bgColor,
    },
    expansionSummary: {
      paddingTop: 10,
      justifyContent: "flex-start",
    },
  });

export default styles;
