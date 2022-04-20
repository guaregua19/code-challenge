import Moralis from "moralis";
import { useState } from "react";
import { useWeb3Transfer } from "react-moralis";
import CustomContainer from "./CustomContainer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EthSender = () => {

    const [ethAmount, setEthAmount] = useState(0);
    const [wallet, setWallet] = useState('');

    const { fetch, isFetching } = useWeb3Transfer({
        amount: Moralis.Units.ETH(ethAmount),
        receiver: wallet,
        type: 'native'
    })

    const handleAmountchange = (e: any) => {
        setEthAmount(e.target.value)
    }

    const handleWalletchange = (e: any) => {
        setWallet(e.target.value)
    }

    const handleFormSubmit = async () => {
        if (isFetching) {
            toast.info('Please wait to send your next request')
        }
        await Moralis.enableWeb3();
        fetch({
            onSuccess: () => {
                toast.success('Funds sent successfully')
            },
            onError: (errors: any) => {
                console.error(errors)
                toast.error('Error on sending funds', {
                    hideProgressBar: true,
                })

            }
        });
    }

    return (
        <CustomContainer>
            <h2>Send ETH</h2>
            <div className="input-container">
                <label htmlFor="amount">Amount to send</label>
                <input className="custom-input" onChange={handleAmountchange} type="number" step={0.01} min={0} />
            </div>
            <div className="input-container">
                <label htmlFor="amount">Wallet</label>
                <input className="custom-input" onChange={handleWalletchange} type="text" />
            </div>
            <div className="button" onClick={handleFormSubmit}>Send ETH</div>
        </CustomContainer>
    )
}


export default EthSender;