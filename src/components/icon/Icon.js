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

const IconType = (props) => {
  const { type } = props;
  return (
    <>
      {type === "materialIcon" ? (
        <MaterialIcon {...props} />
      ) : type === "materialCommunityIcon" ? (
        <MaterialCommunityIcon {...props} />
      ) : type === "entypo" ? (
        <Entypo {...props} />
      ) : type === "zocial" ? (
        <Zocial {...props} />
      ) : type === "feather" ? (
        <Feather {...props} />
      ) : type === "ionIcons" ? (
        <Ionicons {...props} />
      ) : type === "octIcons" ? (
        <Octicons {...props} />
      ) : type === "evilIcons" ? (
        <EvilIcons {...props} />
      ) : type === "antDesign" ? (
        <AntDesign {...props} />
      ) : type === "foundation" ? (
        <Foundation {...props} />
      ) : type === "fontAwesome" ? (
        <FontAwesome {...props} />
      ) : type === "fontAwesome5" ? (
        <FontAwesome5 {...props} />
      ) : (
        type === "simpleLineIcons" && <SimpleLineIcons {...props} />
      )}
    </>
  );
};

const Icon = (props) => {
  const { type } = props;
  return <IconType type={type} {...props} />;
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
