import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const PaymentSuccess = () => {
  const { trans_id } = useParams();
  const axiosPublic = useAxiosPublic();

  const [payAmount, setPayAmount] = useState({});
  useEffect(() => {
    axiosPublic
      .get(`/transsctionDetails/${trans_id}`)
      .then((res) => setPayAmount(res.data));
  }, []);

  console.log(payAmount);
  return (
    <div>
      <div className=" p-5 rounded-sm my-10 ">
        <img
          src="https://raw.githubusercontent.com/mehhed/fakeData/main/payment.png"
          className="mx-auto"
          alt=""
        />
        <div className="max-w-[500px] mx-auto">
          <p className="text-sm flex justify-between gap-5 mt-3">
            Total Paid : <span>{payAmount?.totalPrice} BDT</span>
          </p>
          <p className="text-sm flex justify-between gap-5 mt-3">
            Transaction id : <span>{trans_id}</span>
          </p>
          <p className=" flex justify-center gap-5 mt-10">
            <Link className="btn bg-green-500 btn-sm px-5  text-white" to={"/"}>
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
<div> success fully payment</div>;
