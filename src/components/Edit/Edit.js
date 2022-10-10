import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Edit.module.scss";
import Input from "../Input/Input";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../redux/userSlice";
const cx = classNames.bind(styles);

const Edit = (props) => {
  const { setEdit } = props;
  const avatarData = [
    "https://preview.redd.it/n9nnnionfu361.png?auto=webp&s=c010326282ec4b19b9b6340d7cdb1616b5c70968",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://preview.redd.it/mkemq6sqf7261.png?auto=webp&s=314cb48d9de13f542a9e39f54b9991e219c53d79",
    "https://i.redd.it/ib7scrg5t7w61.png",
    "https://i.redd.it/76zj5ihvk0261.png",
    "https://preview.redd.it/rrz3hmsxcll71.png?auto=webp&s=59f9f6ae2b212be39fc4f3e17fcabc873c287858",
  ];
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState(user.theme);
  const [url, setUrl] = useState(user.url);
  const [active, setActive] = useState(0)
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const uploadData = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      theme: theme,
    };
    dispatch(update(uploadData));
  };
 console.log(active)
  return (
    <form onSubmit={handleSubmit} className={cx("form")}>
      <div className={cx("wrapper")}>
        <button className={cx("close")}>Save</button>
        <div className={cx("info")}>information</div>

        <Input label="Name" data={name} setData={setName} />
        <Input label="Age" data={age} setData={setAge} />
        <Input
          inputType="textarea"
          label="About"
          data={about}
          setData={setAbout}
          className= "textarea"
        />
        <div className={cx("avatar")}>
          {avatarData.map((item, index) => (
            <div key={index} onClick={()=> setActive(index)} className={cx("item", active === index ? "active": "item")} >
              <img
                src={item}
                alt=""
                className={cx("img")}
                onClick={(e) => setUrl(e.target.src)}
              />
            </div>
          ))}
        </div>
        <div className={cx("theme")}>
          <lable>theme </lable>
          <input
            type="color"
            className={cx("input-color")}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};
export default Edit;
