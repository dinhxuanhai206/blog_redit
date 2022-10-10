import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const Footer = (props) => {
  const { isOpenPost, setOpenPost } = props;
  return (
    <footer className={cx("wrapper")} onClick={() => setOpenPost(!isOpenPost)}>
      {!isOpenPost ? "+" : "x"}
    </footer>
  );
};
export default Footer;
