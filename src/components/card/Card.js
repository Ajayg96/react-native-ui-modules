import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { View, Text } from "react-native";

const Card = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => props.onPress()}
      style={styles(props).card}
    >
      <View style={props.headerStyle}>
        <Text style={props.headerTextStyle}>{props.cardTitle}</Text>
      </View>
      {props.children}
    </TouchableOpacity>
  );
};

Card.propTypes = {
  onPress: PropTypes.func,
  cardColor: PropTypes.string,
  cardHeight: PropTypes.number,
  cardBorder: PropTypes.number,
  headerStyle: PropTypes.object,
  headerTextStyle: PropTypes.object,
  children: PropTypes.element.isRequired,
  cardWidth: PropTypes.string.isRequired,
};

export default Card;
