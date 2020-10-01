import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { View, Text, TouchableOpacity } from "react-native";

const Card = (props) => {
  const { onPress, headerStyle, headerTextStyle, cardTitle, children } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress()}
      style={styles(props).card}
    >
      <View style={headerStyle}>
        <Text style={headerTextStyle}>{cardTitle}</Text>
      </View>
      {children}
    </TouchableOpacity>
  );
};

Card.propTypes = {
  onPress: PropTypes.func,
  cardColor: PropTypes.string,
  cardBorder: PropTypes.number,
  headerStyle: PropTypes.object,
  headerTextStyle: PropTypes.object,
  children: PropTypes.element.isRequired,
  cardWidth: PropTypes.string.isRequired,
};

export default Card;
