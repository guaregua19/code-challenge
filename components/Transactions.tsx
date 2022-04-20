import { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { defaultChain, etherscanBaseUrl } from "../constants/constants";
import { ITransactionProps } from "../interfaces/Transaction";
import CustomContainer from "./CustomContainer";

const Transactions = ({ user }: ITransactionProps) => {
    const web3Api = useMoralisWeb3Api();
    const [fetchedTransactions, setFetchedTransactions] = useState<any>([]);

    const fetchTransactions = async () => {
        const transactions = await web3Api.account.getTransactions({
            chain: defaultChain,
            address: user?.get('ethAddress')
        }).catch(e => console.error(e))

        if (transactions?.result) {
            setFetchedTransactions(transactions?.result);
        }
    }

    useEffect(() => {
        fetchTransactions();
    }, [])
    return (
        <CustomContainer>        
        <h2>Transactions</h2>

        {
            fetchedTransactions && fetchedTransactions?.map((transaction: any) => 
                <p key={transaction.hash} className="link" onClick={() => window.open(`${etherscanBaseUrl}${transaction.hash}`)}>✔️ {transaction.hash}</p>
                )
        }
        </CustomContainer>

    )
}

export default Transactions;