import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { getSelectUnstyledUtilityClass } from "@mui/base";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const Header = (props) => {
  const { setEdit } = props;
  const user = useSelector((state) => state.user);
  const handleEdit = () => {
    setEdit(true);
  };
  return (
    <div className={cx("container")}>
      <header style={{ backgroundColor:`${user.theme}`}}>
        <div className={cx("wrapper")}>
          <div className={cx("edit")} onClick={handleEdit}>
            Edit
          </div>
          <div className={cx("img")}>
            <img src={user.avaUrl} alt="" className={cx("img-avatar")} />
          </div>
          <div className={cx("info-name")}>{user.name}</div>
          <div className={cx("info-old")}>{user.age}</div>
          <div className={cx("info-about")}>{user.about}</div>
        </div>
      </header>
    </div>
  );
};
export default Header;
