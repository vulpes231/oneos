import React from "react";
import Span from "./Span";
import { und } from "../assets";
import { Web3Button, useAddress } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../constants";

const Landing = ({ loading, owner }) => {
  const address = useAddress();
  return (
    <section className="p-6 flex flex-col gap-8 w-full text-[#fff]">
      <div className="flex flex-col items-center justify-center gap-8 lg:max-w-[900px] lg:mx-auto">
        <div className="flex flex-col gap-1 text-center ">
          <h3 className="text-xl font-semibold leading-8 whitespace-nowrap ">
            Simple and Secure Messaging
          </h3>
          <p className="capitalize font-light opacity-45 text-sm">
            keeping you informed and connected.
          </p>
        </div>
        <p className="text-center font-extralight leading-8 text-md opacity-45 text-sm ">
          $EDG is an AI-powered decentralized communication infrastructure built
          to provide encrypted emails, unified notifications, and targeted
          marketing across multiple chains and dApps for users, developers, and
          marketers.
        </p>
        <span>
          {address ? (
            <div className="flex flex-row gap-4 ">
              <Web3Button
                contractAddress={CONTRACT_ADDRESS}
                action={(contract) => contract.call("getCount")}
                // onSuccess={alert("success")}
              >
                Airdrop
              </Web3Button>
              <Web3Button
                contractAddress={CONTRACT_ADDRESS}
                action={(contract) => contract.call("getCount")}
                // onSuccess={alert("success")}
              >
                Mint
              </Web3Button>
            </div>
          ) : (
            <p className="bg-purple-500 text-purple-500 font-bold bg-opacity-20 p-3 rounded-lg">
              Connect your wallet to get started.
            </p>
          )}
        </span>
      </div>

      <div className="flex flex-col gap-4 font-light w-full lg:max-w-[900px] lg:mx-auto text-[#333]">
        <article className="flex justify-between bg-slate-50  p-6 rounded-lg w-full">
          <Span title={"Instances"} value={"20.50m"} />
          <Span title={"Interactions"} value={"180.50m"} />
        </article>
        <article className="flex justify-between bg-slate-50  p-6 rounded-lg w-full">
          <Span title={"Transactions"} value={"300.50m"} />
          <Span title={"Domains"} value={"2.98m"} />
        </article>
      </div>

      <div className="w-full lg:max-w-[900px] lg:mx-auto text-[#333]">
        <select
          name=""
          id=""
          className="w-full border p-2 border-slate-200 outline-none font-light text-sm"
        >
          <option value="">Protocols</option>
          <option value="">Networks</option>
          <option value="">Mining</option>
        </select>
      </div>
      <figure>
        <img src={und} alt="" className="w-full md:w-[500px] mx-auto" />
      </figure>
    </section>
  );
};

export default Landing;
