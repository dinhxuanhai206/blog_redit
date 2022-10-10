import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./MakePost.module.scss";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/postSlice";
const cx = classNames.bind(styles);

const MakePost = (props) => {
  const { setOpenPost } = props;
  const dispatch = useDispatch()
  const [title, setTitle] = useState("title");
  const [desc, setDesc] = useState("desc");

  const handlePost = () => {
    setOpenPost(false);
    const newPost = {

      title: title,
      desc: desc,
    };
    dispatch(createPost(newPost))
  };
  return (
    <div className={cx("wrapper")}>
     
      <Input
        inputType="textarea"
        label="Title"
        data={title}
        setData={setTitle}
        className="input"
      />
      <Input
        inputType="textarea"
        label="Desciptions"
        data={desc}
        setData={setDesc}
        className="textarea"
      />
      <p className={cx("save-post")} onClick={handlePost}>
        Post
      </p>
    </div>
  );
};
export default MakePost;
