import React from "react";


const styles = {
  isActive: "is-active",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
  isDark: "is-dark",
  isFocused: "is-focused",
  isGrouped: "is-grouped",
  isHovered: "is-hovered",
  isInfo: "is-info",
  isInverted: "is-inverted",
  isLarge: "is-large",
  isLight: "is-light",
  isLink: "is-link",
  isLoading: "is-loading",
  isMedium: "is-medium",
  isOutlined: "is-outlined",
  isPrimary: "is-primary",
  isRight: "is-right",
  isRounded: "is-rounded",
  isSelected: "is-selected",
  isSmall: "is-small",
  isStatic: "is-static",
  isSuccess: "is-success",
  isText: "is-text",
  isWarning: "is-warning",
  isWhite: "is-white"
};



const CoolButton = props => {
  // console.log(props.className);

  let style = "button";
  for (let key in styles) {
    if (props[key]) {
      style += ` ${styles[key]}`
    }
    console.log(style)
  }
  return (
    <React.Fragment>
      <button className={style}>{props.children}</button>
    </React.Fragment>
  );
};

export default CoolButton;
