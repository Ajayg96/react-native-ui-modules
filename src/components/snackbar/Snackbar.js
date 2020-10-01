import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { Text, View, Modal, TouchableOpacity } from "react-native";

const Snackbar = (props) => {
  const { visible, handleAction, position, message, actionText } = props;
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => handleAction()}
    >
      <View
        style={
          position === "top"
            ? [styles(props).snackbar, styles(props).positionTop]
            : position === "bottom"
            ? [styles(props).snackbar, styles(props).positionBottom]
            : [styles(props).snackbar, styles(props).positionBottom]
        }
      >
        <View style={styles(props).widthBig}>
          <Text style={styles(props).messageText}>{message}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles(props).widthSmall}
          onPress={() => handleAction()}
        >
          <Text style={styles(props).buttonText}>{actionText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

Snackbar.propTypes = {
  handleAction: PropTypes.func,
  actionText: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
  message: PropTypes.string.isRequired,
  messageTextColor: PropTypes.string,
  actionTextColor: PropTypes.string,
  position: PropTypes.oneOf(["top", "bottom"]),
};

export default Snackbar;
