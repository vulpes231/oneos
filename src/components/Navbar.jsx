import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

import { MdCurrencyBitcoin } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full p-6">
      <h1 className="uppercase text-2xl font-bold text-purple-800 flex items-center gap-2">
        <MdCurrencyBitcoin /> oneos
      </h1>
      <div>
        <ConnectWallet />
      </div>
    </nav>
  );
};

export default Navbar;
