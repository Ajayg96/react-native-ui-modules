import React, { useState } from "react";
import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { View, Text, TouchableOpacity } from "react-native";

const Picker = (props) => {
  const [expanded, onChange] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles(props).picker}
      onPress={() => onChange(!expanded)}
    >
      <View style={styles(props).rowContainer}>
        <Text style={props.pickerTextStyle}>
          {props.selectedItem ? "Selected: " : "Select"}
          {props.selectedItem}
        </Text>
        <Icon
          size={23}
          color="#000"
          type="materialIcon"
          name="arrow-drop-down"
        />
      </View>
      {expanded &&
        props.pickerItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() => {
              onChange(!expanded);
              props.onValueChange(item);
            }}
            style={styles(props).pickerItemContainer}
          >
            <Text style={props.pickerItemStyle}>{item}</Text>
          </TouchableOpacity>
        ))}
    </TouchableOpacity>
  );
};

Picker.propTypes = {
  bgColor: PropTypes.string,
  selectedItem: PropTypes.string,
  pickerTextStyle: PropTypes.object,
  pickerItemStyle: PropTypes.object,
  width: PropTypes.string.isRequired,
  pickerItems: PropTypes.array.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default Picker;
