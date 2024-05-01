import React from "react";
import ItemAddForm from "../../components/deshbordComponent/adminComponent/ItemAddForm";

const AddProduct = () => {
  return (
    <div className="pr-5 md:pr-10 text-gray-500">
      <h1 className="text-lg text-center font-semibold md:text-2xl bg-[#f2f2f2] py-5">
        Add a new product
      </h1>
      <div className=" mt-5">
        <ItemAddForm></ItemAddForm>
      </div>
    </div>
  );
};

export default AddProduct;
<h1>Add a new product </h1>;
