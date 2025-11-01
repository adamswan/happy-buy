import { useState, useEffect } from "react";
import "./style.scss";
import useRequest from "../utils/useRequest";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setpassword] = useState("");

  const { data, error, sendRequest, cancelRequest } = useRequest("https://v.api.aa1.cn/api/bilibili-rs/", "get");

  async function handleSubmitBtnClick() {
    sendRequest();
    console.log(data);
    cancelRequest();
  }

  useEffect(() => {
    if (data) {
      alert("登录成功");
    }
    if (error) {
      alert("登录失败");
    }
  }, [data, error]);

  return (
    <>
      <div className="page login-page">
        <div className="tab">
          <div className="tab-item tab-item-left">登录</div>
          <div className="tab-item tab-item-right">注册</div>
        </div>

        <div className="form">
          <div className="form-item">
            <div className="form-item-title">手机号</div>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-item-content"
              type="text"
              placeholder="请输入手机号"
            />
          </div>
          <div className="form-item">
            <div className="form-item-title">密码</div>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="form-item-content"
              type="password"
              placeholder="请输入密码"
            />
          </div>
        </div>

        <div className="submit" onClick={handleSubmitBtnClick}>
          登录
        </div>
        <div className="notice">*登录即表示您赞同使用条款及隐私政策</div>
      </div>
    </>
  );
};

export default Login;
