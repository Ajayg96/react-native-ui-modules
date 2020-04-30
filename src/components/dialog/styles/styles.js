import { StyleSheet } from "react-native";
import { ThemeColor, shadow } from "../../../static/constants";

const styles = (props) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems:
        props.type === "bottomSheet"
          ? "flex-end"
          : props.type === "dialog"
          ? "center"
          : "center",
      justifyContent:
        props.type === "bottomSheet"
          ? "flex-end"
          : props.type === "dialog"
          ? "center"
          : "center",
      backgroundColor: ThemeColor.transparentColor,
    },
    dialogContainer: {
      ...shadow,
      alignSelf: "center",
      width: props.dialogContainer.dialogStyle.dialogWidth,
      backgroundColor: props.dialogContainer.dialogStyle.dialogBackgroundColor,
    },
    headerContainer: {
      ...shadow,
      padding: 10,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: props.dialogContainer.dialogHeaderStyle.headerBgColor,
    },
    headerTitleContainer: {
      justifyContent: "center",
      width: props.dialogContainer.dialogHeaderComponent.renderCloseIcon
        ? "90%"
        : "100%",
      paddingLeft:
        props.dialogContainer.dialogHeaderStyle.alignDialogTitle === "left"
          ? 12
          : 0,
    },
    headerTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: props.dialogContainer.dialogHeaderStyle.dialogTitleColor,
      textAlign: props.dialogContainer.dialogHeaderStyle.alignDialogTitle,
    },
    iconButton: {
      alignItems: "center",
      width: props.dialogContainer.dialogHeaderComponent.renderCloseIcon
        ? "10%"
        : "0%",
    },
    dialogContent: {
      margin: 10,
      width: "90%",
      alignItems: "center",
      alignSelf: "center",
    },
    button: {
      padding: 8,
      alignItems: "center",
      marginBottom:
        props.dialogContainer.dialogFooterStyle.buttonDirection === "row"
          ? 0
          : 15,
    },
    primaryButton: {
      width: props.dialogContainer.dialogFooterStyle.primaryButtonWidth,
      borderRadius: props.dialogContainer.dialogFooterStyle.primaryButtonRadius,
      backgroundColor:
        props.dialogContainer.dialogFooterStyle.primaryButtonColor,
    },
    secondaryButton: {
      width: props.dialogContainer.dialogFooterStyle.secondaryButtonWidth,
      borderRadius:
        props.dialogContainer.dialogFooterStyle.secondaryButtonRadius,
      backgroundColor:
        props.dialogContainer.dialogFooterStyle.secondaryButtonColor,
      marginLeft:
        props.dialogContainer.dialogFooterStyle.buttonDirection === "row"
          ? 15
          : 0,
    },
    footerContainer: {
      margin: 10,
      alignItems: "center",
      flexDirection: props.dialogContainer.dialogFooterStyle.buttonDirection,
      justifyContent: props.dialogContainer.dialogFooterStyle.alignFooterButton,
    },
  });

export default styles;
