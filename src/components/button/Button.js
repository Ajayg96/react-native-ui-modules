import React from "react";
import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { View, Text, TouchableOpacity } from "react-native";

const Button = (props) => {
  const { startIcon, endIcon, variant, buttonStyle, titleStyle, title } = props;

  let buttonWidth;
  startIcon || endIcon ? (buttonWidth = "90%") : (buttonWidth = "100%");

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[
        variant === "contained"
          ? styles(props).contained
          : variant === "outlined" && styles(props).outlined,
        buttonStyle,
      ]}
    >
      {startIcon && (
        <View style={styles(props).icon}>
          <Icon
            type={startIcon?.iconType}
            name={startIcon?.iconName}
            size={startIcon?.iconSize}
            color={startIcon?.iconColor}
            style={styles(props).buttonIcon}
          />
        </View>
      )}
      <View style={[styles(props).button, { width: buttonWidth }]}>
        <Text style={[styles(props).buttonTitle, titleStyle]}>{title}</Text>
      </View>
      {endIcon && (
        <View style={styles(props).icon}>
          <Icon
            type={endIcon?.iconType}
            name={endIcon?.iconName}
            size={endIcon?.iconSize}
            color={endIcon?.iconColor}
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
