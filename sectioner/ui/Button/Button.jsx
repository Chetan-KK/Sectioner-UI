import React from "react";
import styles from "./Button.module.css";

export const Button = ({
  children,
  classname,
  variant = "default",
  size = "default",
  disabled = false,
  to,
  ...props
}) => {
  const stylesVariantMap = {
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

  const classNames = `${styles.button} ${stylesSizeMap[size]} ${
    stylesVariantMap[variant]
  } ${classname} ${disabled && "disabled"}`;

  if (to) {
    return (
      <span
        to={to}
        tabIndex={disabled ? "-1" : "0"}
        className={classNames}
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <button disabled={disabled} className={classNames} {...props}>
      {children}
    </button>
  );
};
