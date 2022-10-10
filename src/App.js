import { useState } from "react";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import MakePost from "./components/MakePost/MakePost";
import Posts from "./components/MakePost/Posts";

const cx = classNames.bind(styles);
function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpenPost] = useState(false);

  return (
    <div className={cx("app")}>
      {isEdit ? (
        <Edit setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <div className={cx('post')}>
            <Posts/>
          </div>
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
        </>
      ) : (
        <>
          <MakePost setOpenPost={setOpenPost} />
        </>
      )}
    </div>
  );
}

export default App;
