import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useLoading from "../../Hooks/useLoading";
const Message = () => {
  const { loading, setLoading } = useLoading();

  const axiosPublic = useAxiosPublic();
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axiosPublic.get("/ContactAll").then((res) => {
      setMessage(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="px-5 lg:ps-0">
      <h1 className="text-3xl  text-center py-5 font-semibold bg-[#f2f2f2] mb-2">
        {" "}
        All Messages
      </h1>
      {/* each message */}
      {loading ? (
        <div className="h-[300px] w-full flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="px-5">
          {" "}
          {message.map((one) => (
            <>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src={
                        one?.profile
                          ? one.profile
                          : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                    />
                  </div>
                </div>
                <div className="chat-header">{one?.email}</div>
                <div className="chat-bubble bg-[#f2f2f2] text-gray-700">
                  {one?.message}
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Message;
