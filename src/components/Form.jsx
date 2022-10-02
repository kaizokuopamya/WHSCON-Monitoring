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
      <form className="block p-6 mb-2 border dark:border-slate-600 rounded-lg shadow-lg bg-gray dark:bg-[001E3C] max-w-md w-full">
        <div className="form-group mb-4">
          <label
            htmlFor="idoc-no"
            className="block mb-1 text-sm font-medium text-amber-400 dark:text-sky-400"
          >
            IDoc Number
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal dark:text-slate-100 bg-inherit border border-solid border-amber-600 dark:border-sky-600 rounded transition ease-in-out m-0 dark:focus:text-white-700 focus:bg-inherit focus:border-amber-400 dark:focus:border-sky-400 focus:outline-none"
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
            className="block mb-1 text-sm font-medium text-amber-400 dark:text-sky-400"
          >
            Error Message
          </label>
          <textarea
            className="form-control block w-full px-3 py-1.5 text-base font-normal dark:text-slate-100 bg-inherit border border-solid border-amber-600 dark:border-sky-600 rounded transition ease-in-out m-0 dark:focus:text-white-700 focus:bg-inherit focus:border-amber-400 dark:focus:border-sky-400 focus:outline-none"
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
            className="block mb-1 text-sm font-medium text-amber-400 dark:text-sky-400"
          >
            PO Number
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal dark:text-slate-100 bg-inherit border border-solid border-amber-600 dark:border-sky-600 rounded transition ease-in-out m-0 dark:focus:text-white-700 focus:bg-inherit focus:border-amber-400 dark:focus:border-sky-400 focus:outline-none"
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
            className="block mb-1 text-sm font-medium text-amber-400 dark:text-sky-400"
          >
            ASN Number
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal dark:text-slate-100 bg-inherit border border-solid border-amber-600 dark:border-sky-600 rounded transition ease-in-out m-0 dark:focus:text-white-700 focus:bg-inherit focus:border-amber-400 dark:focus:border-sky-400 focus:outline-none"
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
            className="block mb-1 text-sm font-medium text-amber-400 dark:text-sky-400"
          >
            Article Number
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal dark:text-slate-100 bg-inherit border border-solid border-amber-600 dark:border-sky-600 rounded transition ease-in-out m-0 dark:focus:text-white-700 focus:bg-inherit focus:border-amber-400 dark:focus:border-sky-400 focus:outline-none"
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
            className="block mb-1 text-sm font-medium text-amber-400 dark:text-sky-400"
          >
            Quantity
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal dark:text-slate-100 bg-inherit border border-solid border-amber-600 dark:border-sky-600 rounded transition ease-in-out m-0 dark:focus:text-white-700 focus:bg-inherit focus:border-amber-400 dark:focus:border-sky-400 focus:outline-none"
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
            className="text-white bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 dark:bg-gradient-to-r dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-amber-300 dark:focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
          >
            Clear
          </button>
        </div>
      </form>
      <Info data={formData} />
    </div>
  );
}
