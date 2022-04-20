import { IUserProfileProps } from "../interfaces/UserProfile"
import CustomContainer from "./CustomContainer"

const UserProfile = ({user} : IUserProfileProps) => {
    return (
        <CustomContainer>
            <h2>Profile</h2>
            <p> <b> Username: </b>{user?.getUsername()}</p>
            <p> <b> Wallet: </b>{user?.get('ethAddress')}</p>
        </CustomContainer>
    )

}

export default UserProfile