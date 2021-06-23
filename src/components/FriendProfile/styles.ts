import styled from "styled-components";

export const FriendWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 30rem;
    justify-content: flex-start;
    margin-bottom: 2rem;
    b{
        margin-left: 3rem;
        font-size: 12px;
    }
    
`

export const FriendImageWrapper = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 3px solid black;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    margin-left: 1.5rem;
    margin-right: -1.5rem;
    z-index: 3;
    
    
    img{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: cover;
    }
`
