import styled from "styled-components";

interface ILike{
    liked: boolean;
}

export const PiuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    width: 100%;
    border: 1px solid #969696;
    margin-bottom: 8px;
    order: 3;

    h5{
        color: #666666;
        font-size: 12px;
        margin: 1rem 0 0.8rem 10rem;
    }
`

export const PiuDisplay = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export const ImgWrapper = styled.div`
    
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

export const BalloonWrapper = styled.div`
    height: 8rem;
    width: 38rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5%;
`
export const BalloonCurve = styled.div`
    content: "";
    height: 80px;
    width: 32px;
    background-color: white;
    border-radius: 0 0 100% 0;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    z-index: 1;
`

export const BalloonPiu = styled.div`
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    min-height: 80px;
    width: 100%;
    border-left: none; 
    font-size: 12px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    margin-left: -32px;

    ::before{
        content: "";
        height: 2px;
        width: 100%;
        align-self: flex-start;
        background: black;  
    }

    p{
        margin-left: 3.5rem;
        margin-right: -4px;
        width: 36rem;
        text-align: left;
        justify-self: center;
        align-self: center;
        padding: 0 8px;
        font-size: 12px;
        word-wrap: break-word;
    }
`

export const InteractOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
    div{
        max-width: 20rem;
    }
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 7rem;
    margin-left: 8rem;
    
    div{
        display: flex;
        align-items: center;
        margin-right: 2rem;
    }

    b{
        font-size: 12px;
        font-weight: bold;
        margin-right: 0.5rem;
    }
    img{
        width: 2.5rem;
        cursor: pointer;
    }

`
export const Like = styled.img<ILike>`
    width: 2.5rem;
    cursor: pointer;
    border-radius: 30%;
    border: ${props => props.liked ? "2px solid gold" : "none"};
`

export const Delete = styled.div`
    margin-right: 2.5rem;
    img{
        height: 3rem;
        cursor: pointer;
    }
`
