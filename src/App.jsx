import { useContract, useContractRead } from "@thirdweb-dev/react";

import React, { useEffect, useState } from "react";
import Landing from "./components/Landing";
import { CONTRACT_ADDRESS } from "./constants";
import Navbar from "./components/Navbar";

export default function Home() {
  const { contract } = useContract(CONTRACT_ADDRESS);

  const { data: owner, isLoading: isOwnerLoading } = useContractRead(
    contract,
    "getOwner"
  );

  return (
    <>
      <Navbar />

      <Landing loading={isOwnerLoading} owner={owner} />
    </>
  );
}
