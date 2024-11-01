import React from "react";
import styles from "./Input.module.css";

export const Input = ({
  className,
  variant = "default",
  size = "default",
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
    small: styles.smallSize,
    large: styles.largeSize,
  };

  const classNames = `${styles.input} ${stylesSizeMap[size]} ${stylesVariantMap[variant]} ${className}`;

  return <input className={classNames} {...props} />;
};
