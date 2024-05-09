import React from "react";
import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <>
      <div className="flex justify-center mt-10 px-5 md:px-10 lg:px-20">
        <img
          src="https://media.licdn.com/dms/image/C5112AQGiR7AdalYNjg/article-cover_image-shrink_600_2000/0/1582176281444?e=2147483647&v=beta&t=QVzBFLJpbDlQMX_H5iKXr7Jr1w6Pm60tOJb47rjpX6Q"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <Link className="p-2 bg-gray-100 " to={"/addToCartPage"}>
          Go to cart
        </Link>
      </div>
    </>
  );
};

export default PaymentFail;
