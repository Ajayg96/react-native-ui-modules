import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { View, Modal, ActivityIndicator } from "react-native";

const Spinner = (props) => {
  const { visible, onClose, size, color } = props;
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={() => onClose()}
    >
      <View style={styles(props).spinnerContainer}>
        <View style={styles(props).spinner}>
          <ActivityIndicator size={size} color={color} />
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
