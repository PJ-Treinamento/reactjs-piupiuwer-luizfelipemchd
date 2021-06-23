import React from "react";
import { FriendImageWrapper, FriendWrapper } from "./styles";

interface IFriendProfile{
    img: string;
    name: string;
}

const FriendProfile: React.FC<IFriendProfile> = (props) => {
    return(
        <FriendWrapper>
            <FriendImageWrapper>
                <img src={props.img} alt="" />
            </FriendImageWrapper>
            <b>{props.name}</b>
        </FriendWrapper>
    );
} 

export default FriendProfile;