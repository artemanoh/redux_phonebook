import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={onChange}
      className={styles.filterInput}
    />
  );
};

export default Filter;
