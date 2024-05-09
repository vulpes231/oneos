import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import React from "react";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oneos.
              </a>
            </span>
          </h1>

          <div className="connect">
            <ConnectWallet />
          </div>
        </div>
        <Landing />
      </div>
    </main>
  );
}
