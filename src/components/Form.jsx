import React from "react";
import { useState } from "react";
import Info from "./Info";

export default function Form() {
  const [formData, setFormData] = useState({
    idocno: "",
    errormsg: "",
    pono: "",
    asnno: "",
    articleno: "",
    quantity: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      idocno: "",
      errormsg: "",
      pono: "",
      asnno: "",
      articleno: "",
      quantity: "",
    }));
  };

  return (
    <div className="md:flex justify-around">
      <form className="block p-6 mb-2 border border-slate-600 rounded-lg shadow-lg bg-[001E3C] max-w-md w-full">
        <div className="form-group mb-4">
          <label
            htmlFor="idoc-no"
            className="block mb-1 text-sm font-medium text-sky-400"
          >
            IDoc Number
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-100 bg-white bg-inherit border border-solid border-sky-600 rounded transition ease-in-out m-0 focus:text-white-700 focus:bg-inherit focus:border-sky-400 focus:outline-none"
            placeholder="IDoc Number"
            name="idocno"
            value={formData.idocno}
            onChange={handleChange}
            id="idoc-no"
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="error-msg"
            className="block mb-1 text-sm font-medium text-sky-400"
          >
            Error Message
          </label>
          <textarea
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-100 bg-white bg-inherit border border-solid border-sky-600 rounded transition ease-in-out m-0 focus:text-white-700 focus:bg-inherit focus:border-sky-400 focus:outline-none"
            rows="3"
            placeholder="Error Message"
            name="errormsg"
            value={formData.errormsg}
            onChange={handleChange}
            id="error-msg"
          ></textarea>
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="po-no"
            className="block mb-1 text-sm font-medium text-sky-400"
          >
            PO Number
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-100 bg-white bg-inherit border border-solid border-sky-600 rounded transition ease-in-out m-0 focus:text-white-700 focus:bg-inherit focus:border-sky-400 focus:outline-none"
            placeholder="PO Number"
            name="pono"
            value={formData.pono}
            onChange={handleChange}
            id="po-no"
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="asn-no"
            className="block mb-1 text-sm font-medium text-sky-400"
          >
            ASN Number
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-100 bg-white bg-inherit border border-solid border-sky-600 rounded transition ease-in-out m-0 focus:text-white-700 focus:bg-inherit focus:border-sky-400 focus:outline-none"
            placeholder="ASN Number"
            name="asnno"
            value={formData.asnno}
            onChange={handleChange}
            id="asn-no"
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="article-no"
            className="block mb-1 text-sm font-medium text-sky-400"
          >
            Article Number
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-100 bg-white bg-inherit border border-solid border-sky-600 rounded transition ease-in-out m-0 focus:text-white-700 focus:bg-inherit focus:border-sky-400 focus:outline-none"
            placeholder="Article Number"
            name="articleno"
            value={formData.articleno}
            onChange={handleChange}
            id="article-no"
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="quantity"
            className="block mb-1 text-sm font-medium text-sky-400"
          >
            Quantity
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-slate-100 bg-white bg-inherit border border-solid border-sky-600 rounded transition ease-in-out m-0 focus:text-white-700 focus:bg-inherit focus:border-sky-400 focus:outline-none"
            placeholder="Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            id="quantity"
          />
        </div>
        <div className="form-group text-center">
          <button
            onClick={handleClick}
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Clear
          </button>
        </div>
      </form>

      <Info data={formData} />
    </div>
  );
}
