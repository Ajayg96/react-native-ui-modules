import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { View, Modal, ActivityIndicator } from "react-native";

const Spinner = (props) => {
  return (
    <Modal
      transparent={true}
      visible={props.visible}
      onRequestClose={() => props.onClose()}
    >
      <View style={styles(props).spinnerContainer}>
        <View style={styles(props).spinner}>
          <ActivityIndicator size={props.size} color={props.color} />
        </View>
      </View>
    </Modal>
  );
};

Spinner.propTypes = {
  onClose: PropTypes.func,
  color: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
};

export default Spinner;
