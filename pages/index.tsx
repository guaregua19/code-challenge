import { useMoralis } from "react-moralis";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

const Home = () => {
    const {authenticate, isAuthenticated,logout, user} = useMoralis();
    return isAuthenticated ?  <Dashboard handleLogout={logout} user={user} /> : <Login onLoginButtonClicked={authenticate} />
}


export default Home