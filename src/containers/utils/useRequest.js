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
  const sendRequest = () => {
    return axios
      .request({
        url,
        method,
        signal: controller.current.signal,
        data: payload,
      })
      .then((response) => {
        setData(response.data);
        // 在这里 .then() 要返回数据，只有这样，后续的 .then() 才能接受到你return出去的数据
        return response.data;
      })
      .catch((error) => {
        setError(error.message);
        throw new Error(error.message); // 在这里 .catch() 向外抛出错误，只有这样，后续的 .catch() 才能接受到你抛出的错误
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // 取消请求
  const cancelRequest = () => {
    controller.current.abort();
  };

  return { data, error, loading, sendRequest, cancelRequest };
}

export default useRequest;
