import React from "react";
import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { View, TextInput, TouchableOpacity } from "react-native";

const Input = (props) => {
  let hitSlop = { top: 15, left: 15, right: 15, bottom: 15 };
  let inputWidth;
  props.startIcon && props.type === "password"
    ? (inputWidth = "80%")
    : props.startIcon
    ? (inputWidth = "90%")
    : props.type === "password" && (inputWidth = "90%");
  return (
    <View
      style={
        props.variant === "outlined"
          ? styles(props).outlined
          : props.variant === "standard" && styles(props).standard
      }
    >
      {props.startIcon && (
        <View style={styles(props).icon}>
          {props.icon && (
            <Icon
              type={props.icon.iconType}
              name={props.icon.iconName}
              size={props.icon.iconSize}
              color={props.icon.iconColor}
              style={styles(props).inputIcon}
            />
          )}
        </View>
      )}
      <TextInput
        style={[
          styles(props).input,
          props.multiline && styles(props).multlineInput,
          { width: inputWidth },
        ]}
        {...props}
        secureTextEntry={props.type === "password" && props.passwordHidden}
      />
      {props.type === "password" && (
        <View style={styles(props).icon}>
          <TouchableOpacity
            onPress={() => props.togglePassword()}
            hitSlop={hitSlop}
          >
            {props.endIcon && (
              <Icon
                type={props.endIcon.iconType}
                name={
                  props.passwordHidden
                    ? props.endIcon.passwordOffIcon
                    : props.endIcon.passwordOnIcon
                }
                size={props.endIcon.iconSize}
                color={props.endIcon.iconColor}
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
