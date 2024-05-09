import { all } from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useCart from "../Hooks/useCart";
import CheckoutItemList from "./paymentComponents/CheckoutItemList";

const PaymentForm = () => {
  // import cart details
  const { cart } = useCart();

  const axiosPublic = useAxiosPublic();

  const handlePaymentForm = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.phoneNumber.value;
    const email = e.target.contactEmail.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const country = e.target.country.value;
    const addressDetails = e.target.addressDetails.value;
    const city = e.target.city.value;
    const postCode = e.target.postCode.value;
    const messageForDeveleveryMan = e.target.messageForDeveleveryMan.value;
    // delevery address chackout form data
    const deleveryData = {
      phoneNumber,
      email,
      firstName,
      lastName,
      country,
      addressDetails,
      city,
      postCode,
      messageForDeveleveryMan,
    };

    const allData = { cart, deleveryData };

    axiosPublic.post("/payment", allData).then((res) => {
      window.location.replace(res?.data?.url);
    });

    console.log(allData);
  };
  return (
    <div>
      <h1 className="text-center py-5 bg-[#f6f6f6] text-3xl font-semibold text-green-400">
        Green Mart
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:px-20 md:px-10 px-5 py-5 bg-[#f6f6f6]">
        <div>
          {cart.map((one) => (
            <CheckoutItemList key={one?._id} cartData={one}></CheckoutItemList>
          ))}
        </div>
        <div>
          <form className="space-y-3" onSubmit={handlePaymentForm}>
            <h2 className="text-lg text-gray-400 ">Contact </h2>
            <div>
              <input
                type="text"
                placeholder="phone number"
                className="input w-full "
                id="phoneNumber"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="input w-full "
                id="contactEmail"
                required
              />
            </div>
            <div className="flex justify-between items-center gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="input w-full max-w-xs"
                id="firstName"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input w-full max-w-xs"
                id="lastName"
                required
              />
            </div>
            <h2 className="text-lg text-gray-400 ">Delevery Address </h2>
            <div>
              <select
                className="select select-bordered w-full "
                id="country"
                required>
                <option>Bangladesh</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Address details"
                className="input w-full "
                id="addressDetails"
                required
              />
            </div>
            <div className="flex justify-between items-center gap-5">
              <input
                type="text"
                placeholder="City"
                className="input w-full max-w-xs"
                id="city"
                required
              />
              <input
                type="number"
                placeholder="Post Code"
                className="input w-full max-w-xs"
                id="postCode"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="message for delevery man"
                className="input w-full "
                id="messageForDeveleveryMan"
                required
              />
            </div>

            <div>
              <input
                className="btn w-full bg-gradient-to-r from-green-300 to-green-500"
                type="submit"
                value="Next"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
<h1>payment </h1>;
