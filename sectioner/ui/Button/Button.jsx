import React from "react";
import styles from "./styles.module.css";

export const Button = ({
  children,
  classname,
  varient = "default",
  size = "default",
  ...props
}) => {
  const stylesVarientMap = {
    default: styles.default,
    outline: styles.outline,
    ghost: styles.ghost,
    danger: styles.danger,
    success: styles.success,
  };
  const stylesSizeMap = {
    default: styles.defaultSize,
    icon: styles.iconSize,
  };

  return (
    <button
      className={`${styles.button} ${stylesSizeMap[size]} ${stylesVarientMap[varient]} ${classname}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const LinkButton = ({
  children,
  classname,
  varient = "default",
  size = "default",
  to,
  ...props
}) => {
  const stylesVarientMap = {
    default: styles.default,
    outline: styles.outline,
    ghost: styles.ghost,
    danger: styles.danger,
    success: styles.success,
  };
  const stylesSizeMap = {
    default: styles.defaultSize,
    icon: styles.iconSize,
  };

  return (
    <button
      to={to}
      className={`${styles.button} ${stylesSizeMap[size]} ${stylesVarientMap[varient]} ${classname}`}
      {...props}
    >
      {children}
    </button>
  );
};
