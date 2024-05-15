import React, { useContext } from "react";
import { AuthProvider } from "../../../Authentication/AuthenticationProvider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ItemAddForm = () => {
  const { currentUser } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();
  //   img hosting api
  const image_hosting_key = `80d516dd4f6c2aaca07b139f3d55dd7e`;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=80d516dd4f6c2aaca07b139f3d55dd7e`;

  const handeleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = e.target.Name.value;
    const productImag = e.target.Image.files[0];
    const productPrice = e.target.Price.value;
    const productCategories = e.target.categoris.value;
    const productDescription = e.target.discription.value;
    const AdderEmail = currentUser?.email;
    const AdderName = currentUser?.displayName;
    const promote = false;
    console.log({
      productName,
      productImag,
      productPrice,
      AdderName,
      AdderEmail,
      productCategories,
      productDescription,
      promote,
    });

    // post img to img bb and get url
    console.log(Image);
    const imageFile = { image: productImag };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res);

    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        productName,
        AdderName,
        AdderEmail,
        productCategories,
        productDescription,
        PropertieImage: res.data.data.display_url,
        Price: parseInt(productPrice),
        promote,
      };
      //
      console.log(menuItem);
      const menuRes = await axiosPublic.post("/allProduct", menuItem);
      if (menuRes?.data?.insertedId) {
        // show success popup
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${productName} is added to successfully `,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <form className="border p-5 " onSubmit={handeleAddProduct}>
      <div className="">
        <div>
          <label htmlFor="Name" className="text-lg font-bold">
            Product Name
          </label>
          <input
            type="text"
            name="Name"
            id="PropertieTitle"
            className="w-full p-4 border my-2 focus:outline-none"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label htmlFor="Image" className="text-lg font-bold">
            Image
          </label>
          <input
            type="file"
            name="Image"
            id="Image"
            className=" w-full p-4 border cursor-pointer my-2 focus:outline-none"
            placeholder="Image"
            required
          />
        </div>
        <div>
          <label htmlFor="categories">Select Cetegoris </label>
          <select
            className="select rounded-none w-full border border-[#b9b9af62] focus:outline-none"
            id="categories"
            name="categoris"
            required>
            <option disabled selected>
              Select Cetegoris
            </option>
            <option>FRUITS</option>
            <option>FISH</option>
            <option>MEAT</option>
            <option>VEGETABLES</option>
          </select>
        </div>
        <div>
          <label htmlFor="Price" className="text-lg font-bold">
            Price
          </label>
          <input
            type="number"
            name="Price"
            id="Price"
            className=" w-full p-4 border my-2 focus:outline-none"
            placeholder="Price"
            required
            min={1}
          />
        </div>
        <div>
          <label htmlFor="discription" className="text-lg font-bold">
            Discription
          </label>
          <textarea
            required
            name="discription"
            id="discription"
            cols="30"
            rows="3"
            placeholder="product details...... "
            className="block w-full p-4  border focus:outline-none"></textarea>
        </div>
      </div>
      <div className="w-full mt-5 text-center">
        <button className="btn rounded-none bg-green-500 text-white">
          Add Items
        </button>
      </div>
    </form>
  );
};

export default ItemAddForm;
