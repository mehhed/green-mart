import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthProvider } from "../Authentication/AuthenticationProvider";
import TransactionTable from "../components/TransactionTable";
import useAdmin from "../Hooks/useAdmin";

const Transaction = () => {
  const [loading, setLoading] = useState(true);
  const admin = useAdmin();
  const { currentUser } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();

  const [allTransactions, setAllTransactions] = useState([]);
  useEffect(() => {
    axiosPublic
      .get(`/transactions?email=${currentUser?.email}&role=${admin?.userRole}`)
      .then((res) => {
        setAllTransactions(res.data);
        setLoading(false);
      });
  }, [admin?.userRole, axiosPublic, currentUser?.email]);

  return (
    <div className="px-5 lg:ps-0 pr-5">
      <h1 className="text-3xl font-semibold px-5 text-center py-5 mb-2 bg-[#f2f2f2] ">
        All Transaction
      </h1>
      {/* transaction table  */}

      {loading ? (
        <div className="h-[300px] w-full flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="w-full">
          <table className="w-full table rounded-none table-zebra">
            {/* head */}
            <thead className="text-lg capitalize bg-[#f2f2f2] p-0">
              <tr className="border-b border-white text-xs md:text-lg p-0">
                <th className="p-1">Email</th>
                <th className="p-1">Transaction ID</th>
                <th className="p-1"> amount</th>
              </tr>
            </thead>
            <tbody>
              {allTransactions.map((oneData) => (
                <TransactionTable
                  key={oneData?._id}
                  data={oneData}></TransactionTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Transaction;
