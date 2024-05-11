import Iframe from "react-iframe";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
const Contact = () => {
  const axiosPublic = useAxiosPublic();
  const { currentUser } = useContext(AuthProvider);
  //  function for contact form
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const profile = currentUser?.photoURL;

    const messageData = { name, email, message, profile };

    axiosPublic.post("/Contact", messageData).then((res) => {
      if (res.data) {
        Swal.fire({
          icon: "success",
          title: "Our teem will contact with you...",
        });
        form.reset();
      }
    });
  };
  return (
    <div>
      <div className=" md:px-10 lg:px-20 px-5">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-center mb-5 text-green-500">
          Conatact <span className="text-yellow-400">us</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex-1">
            <Iframe
              className=""
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60415.23562680683!2d91.81060227219949!3d22.364597498714744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad270e1868679b%3A0x2a77aa3a90d79a6e!2sK.B.%20Aman%20Ali%20Rd%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1695490742808!5m2!1sen!2sbd"
              width="100%"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></Iframe>
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="w-full  border p-5">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none h-32 resize-none"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
