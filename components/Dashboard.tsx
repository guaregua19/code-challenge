import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { IDashboardProps } from "../interfaces/Dashboard";
import Header from "./Header";
import 'react-tabs/style/react-tabs.css';
import UserProfile from "./UserProfile";
import Balance from "./Balance";
import Transactions from "./Transactions";
import EthSender from "./EthSender";
import { ToastContainer } from 'react-toastify';

const Dashboard = ({ user, handleLogout }: IDashboardProps) => {
    return (
        <>
        <ToastContainer />
            <Header userName={user?.getUsername() || ''} onLogoutButtonClick={handleLogout}></Header>
            <div className="dashboard-content">
            <Tabs>
                <TabList>
                    <Tab>Profile</Tab>
                    <Tab>Balance</Tab>
                    <Tab>Transactions</Tab>
                    <Tab>Send ETH</Tab>
                    
                </TabList>

                <TabPanel>
                    <UserProfile user={user}/>
                </TabPanel>
                <TabPanel>
                    <Balance user={user} />
                </TabPanel>
                <TabPanel>
                    <Transactions user={user} />
                </TabPanel>
                <TabPanel>
                    <EthSender />
                </TabPanel>
            </Tabs>
            </div>
        </>
    )
}

export default Dashboard;