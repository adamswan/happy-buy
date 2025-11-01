import { useRef, useEffect, useCallback } from "react";
import Halo from "../../images/halo.png";
import Slogan from "../../images/slogan.png";
import GoBtn from "../../images/go.png";
import "./style.css";
import { useNavigate } from "react-router-dom";

// 渐变效果的开屏页
function Guide() {
  const guidePageRef = useRef(null);

  useEffect(() => {
    // DOM挂载后，将原来的不透明度从0调整成1，实现渐变效果
    guidePageRef.current.style.opacity = "1";
  }, []);

  const navigate = useNavigate();

  // 函数没传给子组件，用不用useCallback影响不大
  const handleClickBtn = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div ref={guidePageRef} className="page guide-page">
      <img className="main-pic" src={Halo} />
      <p className="title">欢乐购</p>
      <img className="sub-pic" src={Slogan} />
      <img className="go-btn" src={GoBtn} onClick={handleClickBtn} />
    </div>
  );
}

export default Guide;
