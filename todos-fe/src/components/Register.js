import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../configs/config";

const Register = () => {
  const [member, setMember] = useState({
    email: "yuhyea1@gmail.com",
    name: "jerry",
    password: "testtest",
    confirmPassword: "testtest",
    photo: null,
  });

  // e: event 因為發生事件，會觸發相關連的函式，例如因為輸入input --> 觸發了 input 的 onChange
  // e.target 就是事件發生的目標
  function handleChange(e) {
    let newMember = { ...member };
    newMember[e.target.name] = e.target.value;
    setMember(newMember);
    // setMember({ ...member, [e.target.name]: e.target.value });
  }

  // 重構: 再不改變原有功能的情況下，改進你的程式碼結構，使它更容易維護

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await axios.post(`${API_URL}/auth/register`, member);
    } catch (e) {
      console.log("handleSubmit", e);
    }
  }

  return (
    <div className="column is-three-fifths">
      <form className="box" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">帳號</label>
          <div className="control">
            <input
              name="email"
              className="input"
              type="email"
              value={member.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">密碼</label>
          <div className="control">
            <input
              name="password"
              className="input"
              type="password"
              value={member.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">確認密碼</label>
          <div className="control">
            <input
              name="confirmPassword"
              className="input"
              type="password"
              value={member.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">暱稱</label>
          <div className="control">
            <input
              name="name"
              className="input"
              type="text"
              value={member.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="file is-primary is-boxed has-name mb-3">
          <label className="file-label">
            <input name="photo" className="file-input" type="file" />
            <span className="file-cta">
              <FontAwesomeIcon icon={faUpload} />
              <span className="file-label">選擇檔案</span>
            </span>
            <span className="file-name">TODO: 檔名</span>
          </label>
          <figure className="image is-128x128 ml-5">
            <img src="#" />
          </figure>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">註冊</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
