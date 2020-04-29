import React from "react";
import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import { shadow } from "../../static/constants";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Picker = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => props.onChange()}
      style={styles(props).picker}
    >
      <View style={styles(props).rowContainer}>
        <Text style={props.pickerTextStyle}>
          {props.selectedItem ? "Selected: " : "Select"}
          {props.selectedItem}
        </Text>
        <Icon size={23} color="#000" name="keyboard-arrow-down" />
      </View>
      {props.expanded &&
        props.pickerItems.map((item) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              props.onChange();
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
  onValueChange: PropTypes.func,
  pickerTextStyle: PropTypes.object,
  pickerItemStyle: PropTypes.object,
  width: PropTypes.number.isRequired,
  expanded: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  pickerItems: PropTypes.array.isRequired,
};

const styles = (props) =>
  StyleSheet.create({
    rowContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    picker: {
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
    pickerItemContainer: {
      paddingTop: 10,
      justifyContent: "flex-start",
    },
  });

export default Picker;
