import { useState, useRef } from "react";
import axios from "axios";

function useRequest(url, method, payload) {
  // 请求相关数据
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // 创建 abort controller
  const controller = useRef(new AbortController());

  // 发请求
  const sendRequest = async () => {
    // 每次请求时清空上次的数据
    setData(null);
    setError(null);
    setLoading(false);

    try {
      const res = await axios.request({
        url,
        method,
        signal: controller.current.signal,
        data: payload,
      });
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 取消请求
  const cancelRequest = () => {
    controller.current.abort();
  };

  return { data, error, loading, sendRequest, cancelRequest };
}

export default useRequest;
