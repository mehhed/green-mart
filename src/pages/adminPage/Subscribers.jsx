import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useLoading from "../../Hooks/useLoading";
const Subscribers = () => {
  const { loading, setLoading } = useLoading();

  const axiosPublic = useAxiosPublic();
  const [subsciber, setSubscriber] = useState([]);

  useEffect(() => {
    axiosPublic.get("/subscriberAll").then((res) => {
      setSubscriber(res?.data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center py-5 font-semibold bg-[#f2f2f2] mb-2">
        {" "}
        All Subscriber Email
      </h1>
      {loading ? (
        <div className="h-[300px] w-full flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <ol>
          {subsciber.map((one, index) => (
            <>
              <li className="text-lg text-gray-600 mt-2">
                {index + 1}: {one?.email}
              </li>
            </>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Subscribers;
