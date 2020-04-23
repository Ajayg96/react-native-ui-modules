import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native";
import styles from "./styles/styles";

const Input = (props) => {
  return (
    <TextInput
      style={[
        styles(props).input,
        props.variant === "outlined"
          ? styles(props).outlined
          : props.variant === "standard" && styles(props).standard,
        props.multiline && styles(props).multlineInput,
      ]}
      {...props}
    />
  );
};

Input.propTypes = {
  height: PropTypes.number,
  multiline: PropTypes.bool,
  inputWidth: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  borderBottomColor: PropTypes.string,
  variant: PropTypes.oneOf(["outlined", "standard"]),
};

export default Input;
