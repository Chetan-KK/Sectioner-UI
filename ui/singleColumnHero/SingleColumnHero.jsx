// import { Link } from "react-router-dom";
import styles from "./styles.module.css";

// Main Component Wrapper
export const SingleColumnHero = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.hero} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Heading of component
export const Heading = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.heading} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Sub-Heading of component
export const SubHeading = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.subHeading} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Routing Button
export const Button = ({ children, to, className, ...props }) => {
  return (
    <div className={`${styles.button} ${className}`} to={to} {...props}>
      {children}
    </div>
  );
};
