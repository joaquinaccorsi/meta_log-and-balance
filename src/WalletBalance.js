
import React, {useState} from "react"

const WalletBalance =() => {
    const [errorMessage,setErrorMessage] = useState(null);
    const [defaultAccount,setDefaultAccount] = useState(null);
    const [userBalance,setUserBalance] = useState(null);




    

 
    const getUserBalance = (address) => {
        window.ethereum.request({method:"eth_getBalance",params:[address, "latest"]})
        .then(balance => {
            setUserBalance(ethers.utils.formatEther(balance))
        })
    }

    const chainChangedHandler = () => {
        window.location.reload();
    }

    window.ethereum.on("accountsChanged", accountChangedHandler);
    window.ethereum.on("chainChanged", chainChangedHandler);



    return (
        <div className="WalletBalance">
           
            
            
            <div className="addressDisplay"><h3> Address: {defaultAccount}</h3></div>

            
            


            <div className="balanceDisplay">
                <h3>Balance: {userBalance}</h3>
            </div>

            {errorMessage}

        </div>
    );
}

export default WalletBalance;