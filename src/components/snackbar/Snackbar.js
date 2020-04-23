import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { Text, View, Modal, TouchableOpacity } from "react-native";

const Snackbar = (props) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={props.visible}
      onRequestClose={() => props.handleAction()}
    >
      <View
        style={
          props.position === "top"
            ? [styles(props).snackbar, styles(props).positionTop]
            : props.position === "bottom"
            ? [styles(props).snackbar, styles(props).positionBottom]
            : [styles(props).snackbar, styles(props).positionBottom]
        }
      >
        <View style={styles(props).widthBig}>
          <Text style={styles(props).messageText}>{props.message}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles(props).widthSmall}
          onPress={() => props.handleAction()}
        >
          <Text style={styles(props).buttonText}>{props.actionText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

Snackbar.propTypes = {
  visible: PropTypes.bool,
  message: PropTypes.string,
  handleAction: PropTypes.func,
  actionText: PropTypes.string,
  backgroundColor: PropTypes.string,
  messageTextColor: PropTypes.string,
  actionTextColor: PropTypes.string,
  position: PropTypes.oneOf(["top", "bottom"]),
};

export default Snackbar;
