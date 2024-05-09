import React from "react";
import Span from "./Span";
import { und } from "../assets";

const Landing = () => {
  return (
    <section className="mt-20 p-6 flex flex-col gap-8 w-full text-[#fff]">
      <div className="flex flex-col items-center justify-center gap-8 lg:max-w-[900px] lg:mx-auto">
        <div className="flex flex-col gap-1 text-center ">
          <h3 className="text-2xl font-semibold leading-6 whitespace-nowrap ">
            Simple and Secure Messaging
          </h3>
          <p className="capitalize  font-light">
            keeping you informed and connected.
          </p>
        </div>
        <p className="text-center font-extralight leading-8 text-md ">
          $EDG is an AI-powered decentralized communication infrastructure built
          to provide encrypted emails, unified notifications, and targeted
          marketing across multiple chains and dApps for users, developers, and
          marketers.
        </p>
        <span className="flex flex-row gap-4 ">
          {/* <button
        onClick={handleClick}
        className="capitalize bg-red-600 text-[#fff] py-3 px-8 rounded-md whitespace-nowrap font-bold text-sm hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 "
      >
        claim airdrop
      </button>
      <button
        onClick={handleClick}
        className="capitalize border-2 border-red-600 text-red-500 py-3 px-8 rounded-md whitespace-nowrap font-bold text-sm hover:text-[#fff] hover:border hover:bg-red-600"
      >
        check eligibility
      </button> */}
        </span>
      </div>

      <div className="flex flex-col gap-4 font-light w-full lg:max-w-[900px] lg:mx-auto text-[#333]">
        <article className="flex justify-between bg-slate-50 p-6 rounded-lg w-full">
          <Span title={"Instances"} value={"20.50m"} />
          <Span title={"Interactions"} value={"180.50m"} />
        </article>
        <article className="flex justify-between bg-slate-50 p-6 rounded-lg w-full">
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
