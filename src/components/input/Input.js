import React from "react";
import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { View, TextInput, TouchableOpacity } from "react-native";

const Input = (props) => {
  const {
    icon,
    type,
    variant,
    endIcon,
    multiline,
    startIcon,
    togglePassword,
    passwordHidden,
  } = props;

  let hitSlop = { top: 15, left: 15, right: 15, bottom: 15 };

  let inputWidth;

  startIcon && type === "password"
    ? (inputWidth = "80%")
    : startIcon
    ? (inputWidth = "90%")
    : type === "password"
    ? (inputWidth = "90%")
    : (inputWidth = "100%");

  return (
    <View
      style={
        variant === "outlined"
          ? styles(props).outlined
          : variant === "standard" && styles(props).standard
      }
    >
      {startIcon && (
        <View style={styles(props).icon}>
          {icon && (
            <Icon
              type={icon?.iconType}
              name={icon?.iconName}
              size={icon?.iconSize}
              color={icon?.iconColor}
              style={styles(props).inputIcon}
            />
          )}
        </View>
      )}
      <TextInput
        style={[
          styles(props).input,
          multiline && styles(props).multilineInput,
          { width: inputWidth },
        ]}
        {...props}
        secureTextEntry={type === "password" && passwordHidden}
      />
      {type === "password" && (
        <View style={styles(props).icon}>
          <TouchableOpacity onPress={() => togglePassword()} hitSlop={hitSlop}>
            {endIcon && (
              <Icon
                type={endIcon?.iconType}
                name={
                  passwordHidden
                    ? endIcon?.passwordOffIcon
                    : endIcon?.passwordOnIcon
                }
                size={endIcon?.iconSize}
                color={endIcon?.iconColor}
                style={styles(props).inputIcon}
              />
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

Input.propTypes = {
  passwordHidden: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.shape({
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
    passwordOffIcon: PropTypes.string.isRequired,
    passwordOnIcon: PropTypes.string.isRequired,
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
  height: PropTypes.number,
  endIcon: PropTypes.object,
  multiline: PropTypes.bool,
  startIcon: PropTypes.bool,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  borderBottomColor: PropTypes.string,
  inputWidth: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["outlined", "standard"]).isRequired,
};

export default Input;
