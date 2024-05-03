import React from "react";

const Message = () => {
  return (
    <div>
      <h1 className="text-3xl text-center py-5 font-semibold bg-[#f2f2f2] mb-2">
        {" "}
        All Messages
      </h1>
      {/* each message */}
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">mehedih4700@gmail.com</div>
        <div className="chat-bubble bg-[#f2f2f2] text-gray-700">
          You were the Chosen One! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Cumque quod fuga, dignissimos laborum nostrum
          numquam voluptatum autem repellat! Quaerat sed, incidunt cupiditate
          enim reiciendis minima exercitationem blanditiis placeat ex sunt.
        </div>
      </div>
    </div>
  );
};

export default Message;
