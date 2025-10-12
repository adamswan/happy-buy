import { useState } from "react";

// 状态的不可变
function App() {
  const [info, setInfo] = useState({
    name: "高圆圆",
    age: 18,
  });

  const handleClick = () => {
    const newInfo = { ...info };
    newInfo.age = newInfo.age + 1;
    setInfo(newInfo);
  };

  return (
    <>
      <p className="border-bottom" style={{ fontSize: "0.2rem" }}>
        {info.name} - {info.age}
        {info.name} - {info.age}
        {info.name} - {info.age}
      </p>
      <button onClick={handleClick}>点我修改年龄</button>
    </>
  );
}

export default App;
