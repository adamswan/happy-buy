import { useRef, useEffect } from "react";
import Halo from "./images/halo.png";
import Slogan from "./images/slogan.png";
import "./styles/app.css";

function App() {
  const guidePageRef = useRef(null);

  useEffect(() => {
    guidePageRef.current.style.opacity = "1";
  }, []);

  return (
    <div ref={guidePageRef} className="page guide-page">
      <img className="main-pic" src={Halo} />
      <p className="title">欢乐购</p>
      <img className="sub-pic" src={Slogan} />
    </div>
  );
}

export default App;
