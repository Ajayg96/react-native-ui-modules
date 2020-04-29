import React from "react";
import {
  Entypo,
  Zocial,
  Feather,
  Ionicons,
  Octicons,
  EvilIcons,
  AntDesign,
  Foundation,
  FontAwesome,
  MaterialIcon,
  FontAwesome5,
  SimpleLineIcons,
  MaterialCommunityIcon,
} from "../../static/constants";
import PropTypes from "prop-types";

const Icon = (props) => {
  return (
    <>
      {props.type === "materialIcon" ? (
        <MaterialIcon {...props} />
      ) : props.type === "materialCommunityIcon" ? (
        <MaterialCommunityIcon {...props} />
      ) : props.type === "entypo" ? (
        <Entypo {...props} />
      ) : props.type === "zocial" ? (
        <Zocial {...props} />
      ) : props.type === "feather" ? (
        <Feather {...props} />
      ) : props.type === "ionIcons" ? (
        <Ionicons {...props} />
      ) : props.type === "octIcons" ? (
        <Octicons {...props} />
      ) : props.type === "evilIcons" ? (
        <EvilIcons {...props} />
      ) : props.type === "antDesign" ? (
        <AntDesign {...props} />
      ) : props.type === "foundation" ? (
        <Foundation {...props} />
      ) : props.type === "fontAwesome" ? (
        <FontAwesome {...props} />
      ) : props.type === "fontAwesome5" ? (
        <FontAwesome5 {...props} />
      ) : (
        props.type === "simpleLineIcons" && <SimpleLineIcons {...props} />
      )}
    </>
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf([
    "zocial",
    "entypo",
    "feather",
    "ionIcons",
    "octIcons",
    "evilIcons",
    "antDesign",
    "foundation",
    "fontAwesome",
    "fontAwesome5",
    "materialIcon",
    "simpleLineIcons",
    "materialCommunityIcon",
  ]).isRequired,
};

export default Icon;
