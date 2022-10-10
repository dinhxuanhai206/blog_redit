import React from "react";
import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

const Input = ({ label, data, setData, inputType, className }) => {

  return (
    <div className={cx("wrapper")}>
      <label>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
          className={cx(className)}
        />
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
          className={cx("input")}
        />
      )}
    </div>
  );
};
export default Input;
