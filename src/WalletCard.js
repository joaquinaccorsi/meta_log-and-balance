
import React, {useState} from "react"
import { ethers } from "ethers";

const WalletCard =() => {
    const [errorMessage,setErrorMessage] = useState(null);
    const [defaultAccount,setDefaultAccount] = useState(null);
    const [userBalance,setUserBalance] = useState(null);
    const [connButtonText,setConnButtonText] = useState ("Connect Wallet", defaultAccount);


    const conectWalletHandler = () => {
      if (window.ethereum) {

        window.ethereum.request({method: "eth_requestAccounts"})
    
        .then(result => {
            accountChangedHandler (result [0]);
        }) 

      } else {
          setErrorMessage ("Install Metamask");
        }
    }

    const accountChangedHandler = (newAccount) =>{

        setDefaultAccount(newAccount);
        getUserBalance(newAccount.toString());

    } 


    const getUserBalance = (address) => {
        window.ethereum.request({method:"eth_getBalance",params:[address, "latest"]})
        .then(balance => {
            setUserBalance(ethers.utils.formatEther(balance))
        })
    }




    return (
        <div className="WalletCard">
            <h4>{"Connect your metamask using window.ethereum methods"}</h4>
            
            <button onClick={conectWalletHandler}>{connButtonText}
            </button> 

           
            


            {errorMessage}

        </div>
    );
}

export default WalletCard;