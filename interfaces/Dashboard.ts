import Moralis from "moralis/types";

export interface IDashboardProps {
    user:  Moralis.User | null,
    handleLogout: () => void;
}