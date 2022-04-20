import Moralis from "moralis"
import { useEffect, useState } from "react"
import { useERC20Balances, useMoralisWeb3Api } from "react-moralis"
import { defaultChain } from "../constants/constants"
import { IBalanceProps, IBalanceResult } from "../interfaces/Balance"
import CustomContainer from "./CustomContainer"

const Balance = ({ user }: IBalanceProps) => {

    const web3Api = useMoralisWeb3Api();
    const [balance, setBalance] = useState<any>(0);

    const fetchNativeBalance = async () => {
        const result = await web3Api.account.getNativeBalance({
            chain: defaultChain,
            address: user?.get('ethAddress')
        }).catch(e => console.error(e));

        if (result?.balance) {
            setBalance(Moralis.Units.FromWei(result.balance));
        }
    }

    useEffect(() => {
        fetchNativeBalance();
    }, [])

    return (
        <CustomContainer>
            <h2>Balance</h2>
            <p> <b>Your balance:</b> {balance} Eth</p>
    
        </CustomContainer>
    )
}

export default Balance