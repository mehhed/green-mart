import React from "react";
import PropTypes from "prop-types";

const TransactionTable = ({ data }) => {
  return (
    <>
      <tr className=" border-b text-xs md:text-sm">
        <td className="py-2">{data?.BuyerEmail}</td>
        <td className="py-2">{data?.tran_id}</td>
        <td className="py-2">{data?.totalPrice}Tk</td>
      </tr>
    </>
  );
};

export default TransactionTable;

TransactionTable.propTypes = {
  data: PropTypes.object,
};
