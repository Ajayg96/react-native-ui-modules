import React from "react";
import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { View, Text, TouchableOpacity } from "react-native";

const Button = (props) => {
  let buttonWidth;
  props.startIcon || props.endIcon
    ? (buttonWidth = "90%")
    : (buttonWidth = "100%");

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[
        props.variant === "contained"
          ? styles(props).contained
          : props.variant === "outlined" && styles(props).outlined,
        props.buttonStyle,
      ]}
    >
      {props.startIcon && (
        <View style={styles(props).icon}>
          <Icon
            type={props.startIcon.iconType}
            name={props.startIcon.iconName}
            size={props.startIcon.iconSize}
            color={props.startIcon.iconColor}
            style={styles(props).buttonIcon}
          />
        </View>
      )}
      <View style={[styles(props).button, { width: buttonWidth }]}>
        <Text style={[styles(props).buttonTitle, props.titleStyle]}>
          {props.title}
        </Text>
      </View>
      {props.endIcon && (
        <View style={styles(props).icon}>
          <Icon
            type={props.endIcon.iconType}
            name={props.endIcon.iconName}
            size={props.endIcon.iconSize}
            color={props.endIcon.iconColor}
            style={styles(props).buttonIcon}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

Button.protoTypes = {
  buttonHeight: PropTypes.number,
  borderColor: PropTypes.string,
  buttonColor: PropTypes.string,
  titleColor: PropTypes.string,
  borderRadius: PropTypes.number,
  buttonWidth: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["contained", "outlined"]),
  color: PropTypes.oneOf(["primary", "secondary", "default"]),
  buttonStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  startIcon: PropTypes.shape({
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    iconType: PropTypes.oneOf([
      "zocial",
      "entypo",
      "feather",
      "ionIcons",
      "octIcons",
      "evilIcons",
      "antDesign",
      "foundation",
      "fontAwesome",
      "fontAwesome5",
      "materialIcon",
      "simpleLineIcons",
      "materialCommunityIcon",
    ]).isRequired,
  }),
  endIcon: PropTypes.shape({
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    iconType: PropTypes.oneOf([
      "zocial",
      "entypo",
      "feather",
      "ionIcons",
      "octIcons",
      "evilIcons",
      "antDesign",
      "foundation",
      "fontAwesome",
      "fontAwesome5",
      "materialIcon",
      "simpleLineIcons",
      "materialCommunityIcon",
    ]).isRequired,
  }),
};

export default Button;
