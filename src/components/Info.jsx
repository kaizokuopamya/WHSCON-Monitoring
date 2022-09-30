import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export default function Info(props) {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
    if(isCopied){
      console.log("text copied to clipboard")
    }
  };

  const shortDescription = `WHSCON IDOC failed due to "${props.data.errormsg}"`;

  const description = `Dear colleagues,

Please find below all relevant information with regards to the IDoc error mentioned above:
IDoc number ${props.data.idocno}
PO number ${props.data.pono}
ASN number ${props.data.asnno}
Impacted article ${props.data.articleno} incl. quantity ${props.data.quantity}.

Thank you`;
  return (
    <div className="cards flex-column justify-center items-center">
      <label className="font-bold text-sky-500">Short Description:</label>
      <div className="block p-6 mb-8 max-w-sm bg-[001E3C] rounded-lg border border-slate-600 shadow-md">
        <CopyToClipboard text={shortDescription} onCopy={onCopyText}>
          <div>
            <Tooltip
              className="float-right"
              title="Copied!"
              position="bottom"
              trigger="click"
              arrow="true"
              theme="transparent"
              size="small"
            >
              <FaCopy className="ml-1 float-right cursor-pointer text-white outline-none" />
            </Tooltip>
          </div>
        </CopyToClipboard>
        <p className="font-normal text-gray-100 cursor-text">
          {shortDescription}
        </p>
      </div>

      <label className="font-bold text-sky-500">Description:</label>
      <div className="block p-6 max-w-sm bg-[001E3C] rounded-lg border border-slate-600 shadow-md">
        <CopyToClipboard text={description} onCopy={onCopyText}>
          <div>
            <Tooltip
              className="float-right"
              title="Copied!"
              position="bottom"
              trigger="click"
              arrow="true"
              theme="transparent"
              size="small"
            >
              <FaCopy className="ml-1 float-right cursor-pointer text-white" />
            </Tooltip>
          </div>
        </CopyToClipboard>
        <p className="font-normal text-gray-100 cursor-text">
          <span>Dear colleagues,</span>
          <br />
          <br />
          <span>
            Please find below all relevant information with regards to the IDoc
            error mentioned above:
          </span>
          <br />
          <span>IDoc number {props.data.idocno}</span>
          <br />
          <span>PO number {props.data.pono}</span>
          <br />
          <span>ASN number {props.data.asnno}</span>
          <br />
          <span>
            Impacted article {props.data.articleno} incl. quantity{" "}
            {props.data.quantity}.
          </span>
          <br />
          <br />
          <span>Thank you</span>
        </p>
      </div>
    </div>
  );
}
