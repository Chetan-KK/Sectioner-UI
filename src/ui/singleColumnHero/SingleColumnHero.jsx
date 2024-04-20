import styles from "./styles.module.css";

const SingleColumnHero = ({
  heading,
  subHeading,
  buttonUrl,
  buttonText,
  className,
}) => {
  return (
    <div className={`${styles.hero} ${className}`}>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.subHeading}>{subHeading}</p>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
};

export default SingleColumnHero;
