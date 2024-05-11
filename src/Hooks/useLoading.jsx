import React, { useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(true);

  const sendData = { loading, setLoading };
  return sendData;
};

export default useLoading;
