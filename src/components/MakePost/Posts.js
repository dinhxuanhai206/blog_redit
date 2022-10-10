import React from "react";
import classNames from "classnames/bind";
import styles from "./Posts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../redux/postSlice";

const cx = classNames.bind(styles);

const Posts = () => {
  const post = useSelector((state) => state.post.posts);

  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(deletePost({ id: index }));
  };

  return (
    <div className={cx("wrapper")}>
      {post.slice(1).map((item, index) => (
        <div key={index} className={cx("item")}>
          <div className={cx("name")}>
            <div className={cx("title")}>{item.id}</div>
            <div className={cx("title")}>{item.title}</div>
            <div className={cx("desc")}>{item.desc}</div>
          </div>
          <div className={cx("btn")}>
            <button
              className={cx("btn-del")}
              onClick={() => handleDelete(index)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;
