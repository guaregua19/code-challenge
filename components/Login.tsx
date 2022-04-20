import React from "react";
import Image from "next/image";
import { ILoginProps } from "../interfaces/Login";
import Button from "./Button";

const Login = ({onLoginButtonClicked} : ILoginProps) => {
      return (
       <div className="login-page-content">  
        <div className="card-container">
            <div className="card-wrapper">
                <div className="card-header">
                    <div>
                        <Image src="/assets/img/metamask-logo.png" width='50' height="50" ></Image>
                    </div>
                    <div>
                        MetaMask
                    </div>
                </div>
                <div className="card-body">
                    Connect to your wallet using Web3 estrategies...
                </div>
                <div className="card-footer">
                    <Button label="Sign in" onButtonClicked={onLoginButtonClicked}/>
                </div>
            </div>
        </div>
        </div> 
    )
}

export default Login
