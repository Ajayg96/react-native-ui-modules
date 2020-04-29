import React from "react";
import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import { shadow } from "../../static/constants";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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

export default Accordion;
