import React from "react";
import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { View, Text, TouchableOpacity } from "react-native";

const Accordion = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onChange()}
      activeOpacity={1}
      style={styles(props).accordion}
    >
      <View style={styles(props).rowContainer}>
        <Text style={props.headingStyle}>{props.heading}</Text>
        <Text style={props.secondaryStyle}>{props.secondaryHeading}</Text>
        <Icon
          size={23}
          color="#000"
          type="materialIcon"
          name={props.expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
        />
      </View>
      {props.expanded && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={styles(props).expansionSummary}
        >
          {props.children}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

Accordion.propTypes = {
  bgColor: PropTypes.string,
  heading: PropTypes.string,
  width: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  secondaryHeading: PropTypes.string,
  expanded: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  headingStyle: PropTypes.object,
  secondaryStyle: PropTypes.object,
};

export default Accordion;
