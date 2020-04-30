import React from "react";
import Icon from "../icon/Icon";
import PropTypes from "prop-types";
import styles from "./styles/styles";
import { View, Text, Modal, TouchableOpacity } from "react-native";

const Dialog = (props) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={props.visible}
      onRequestClose={() => props.onClose()}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={styles(props).modalContainer}
        onPress={() => props.cancelable()}
      >
        <View style={styles(props).container}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {}}
            style={styles(props).dialogContainer}
          >
            {props.dialogContainer.dialogHeaderComponent.renderHeader &&
              props.dialogContainer && (
                <View style={styles(props).headerContainer}>
                  <View style={styles(props).headerTitleContainer}>
                    <Text style={styles(props).headerTitle}>
                      {props.dialogContainer.dialogHeaderComponent.dialogTitle}
                    </Text>
                  </View>
                  {props.dialogContainer.dialogHeaderComponent
                    .renderCloseIcon ? (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      hitSlop={{ top: 12, right: 12, left: 12, bottom: 12 }}
                      style={styles(props).iconButton}
                      onPress={() => props.onClose()}
                    >
                      <Icon
                        size={25}
                        name="close"
                        type="materialIcon"
                        color={
                          props.dialogContainer.dialogHeaderStyle.iconColor
                        }
                      />
                    </TouchableOpacity>
                  ) : (
                    <View />
                  )}
                </View>
              )}
            <View style={styles(props).dialogContent}>{props.children}</View>
            {props.dialogContainer.dialogFooterComponent.renderFooterButton &&
              props.dialogContainer.dialogFooterComponent.renderButtonGroup && (
                <View style={styles(props).footerContainer}>
                  <TouchableOpacity
                    style={[styles(props).button, styles(props).primaryButton]}
                    activeOpacity={0.7}
                    onPress={() => {
                      props.dialogContainer.dialogFooterComponent.primaryButtonPress();
                    }}
                  >
                    <Text style={props.buttonTitleStyle}>
                      {
                        props.dialogContainer.dialogFooterComponent
                          .primaryButtonTitle
                      }
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles(props).button,
                      styles(props).secondaryButton,
                    ]}
                    activeOpacity={0.7}
                    onPress={() => {
                      props.dialogContainer.dialogFooterComponent.secondaryButtonPress();
                    }}
                  >
                    <Text style={props.buttonTitleStyle}>
                      {
                        props.dialogContainer.dialogFooterComponent
                          .secondaryButtonTitle
                      }
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            {props.dialogContainer.dialogFooterComponent.renderFooterButton &&
              props.dialogContainer.dialogFooterComponent
                .renderSingleButton && (
                <View style={styles(props).footerContainer}>
                  <TouchableOpacity
                    style={[styles(props).button, styles(props).primaryButton]}
                    activeOpacity={0.7}
                    onPress={() => {
                      props.dialogContainer.dialogFooterComponent.primaryButtonPress();
                    }}
                  >
                    <Text style={props.buttonTitleStyle}>
                      {
                        props.dialogContainer.dialogFooterComponent
                          .primaryButtonTitle
                      }
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

Dialog.propTypes = {
  buttonTitleStyle: PropTypes.object,
  cancelable: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  type: PropTypes.objectOf(["bottomSheet", "dialog"]),
  dialogContainer: PropTypes.object.isRequired,
  // dialogContainer: PropTypes.shape({
  //   dialogStyle: PropTypes.object.isRequired,
  //   dialogWidth: PropTypes.string.isRequired,
  //   dialogBackgroundColor: PropTypes.string,
  //   dialogHeaderStyle: PropTypes.object,
  //   iconColor: PropTypes.string,
  //   headerBgColor: PropTypes.string,
  //   dialogTitleColor: PropTypes.string,
  //   alignDialogTitle: PropTypes.oneOf(["center", "left"]),
  //   dialogHeaderComponent: PropTypes.object,
  //   renderHeader: PropTypes.bool,
  //   dialogTitle: PropTypes.string,
  //   renderCloseIcon: PropTypes.bool,
  //   dialogFooterStyle: PropTypes.object,
  //   buttonDirection: PropTypes.oneOf(["row", "column"]),
  //   alignFooterButton: PropTypes.oneOf([
  //     "center",
  //     "space-evenly",
  //     "space-between",
  //     "space-around",
  //     "flex-end",
  //     "flex-start",
  //   ]),
  //   primaryButtonColor: PropTypes.string,
  //   secondaryButtonColor: PropTypes.string,
  //   primaryButtonWidth: PropTypes.string.isRequired,
  //   secondaryButtonWidth: PropTypes.string.isRequired,
  //   primaryButtonRadius: PropTypes.number,
  //   secondaryButtonRadius: PropTypes.number,
  //   dialogFooterComponent: PropTypes.object.isRequired,
  //   renderFooterButton: PropTypes.bool,
  //   renderButtonGroup: PropTypes.bool,
  //   renderSingleButton: PropTypes.bool,
  //   secondaryButtonTitle: PropTypes.string.isRequired,
  //   primaryButtonTitle: PropTypes.string.isRequired,
  //   primaryButtonPress: PropTypes.func.isRequired,
  //   secondaryButtonPress: PropTypes.func.isRequired,
  // }),
};

export default Dialog;
