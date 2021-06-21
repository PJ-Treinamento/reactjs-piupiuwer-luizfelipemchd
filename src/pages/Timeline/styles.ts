import styled from "styled-components";

interface IPiuSize{
    piuSize: number;
}

interface ISearchPram{
    searchParam: string;
}

interface IAlertUser{
    display: boolean;
}

export const Wrapper = styled.div`
    background-color: #e5e5e5;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #969696;

    >img{
        max-width: 6rem;
        margin-left: 6rem;
    }
`

export const WrapperSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SearchBar = styled.div`
    display: flex;
    align-items: center;

    input{
        outline: none;
        background-color: #F2F2F2;
        border: 2px solid #969696;;
        color: #525252;
        height: 3.5rem;
        width: 22rem;
        font-size: 16px;
        padding-left: 2.8rem;
    }

    img{
        z-index: 1;
        height: 2.3rem;
        margin-right: -2.5rem;
    }

`
export const DropdownWindow = styled.ol<ISearchPram>`
    position: absolute;
    display: ${props => props.searchParam ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    margin-top: 3.7rem;
    background: #f2f2f2;
    border: 1px solid #969696;
    border-radius: 1rem;
    width: 22rem;
    text-align: center;
    font-size: 16px;
    list-style: none;
    li{
        margin: 0.3rem 0;
        width: 90%;
        :hover{
            cursor: pointer;
            background: #969696;
        }
    }
`
export const Unfilter = styled.div<ISearchPram>`
    display: ${props => props.searchParam ? "absolute" : "none"};
    margin-left: -2.5rem;
    img{
        height: 15px;
        cursor: pointer;
    }
`

export const MenuHeader = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    height: 100%;
    justify-content: space-between;
    width: 13rem;
    margin-right: 2rem;

    img{
        width: 3.2rem;
    }

    img:hover{
        cursor: pointer;
    }

`

export const Feed = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

export const PiuTimeline = styled.section`
    width: 50rem;
    display: flex;
    flex-direction: column;

`

export const PiuMaker = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid #969696;
    margin-bottom: 1rem;

`

export const WritePiu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 2rem;
    >img{
        width: 8rem;
        margin-left: 2rem;
        z-index: 2;
        border: 1px solid black;
    }

`

export const BalloonWritePiu = styled.div`
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

`
export const PiuTextarea = styled.textarea<IPiuSize>`
    resize: none;
    height: 7.4rem;
    font-size: 12px;
    border: none;
    margin-right: 0.8rem;
    align-self: flex-end;
    width: 33rem;
    outline: none;
    padding-top: 3px;
    vertical-align: middle;
    color: ${props => props.piuSize >140 ? "red" : "black"};
`


export const Balloon = styled.div`
    border: 2px solid black;
    margin-right: 1rem;

    div{
        height: 7.9rem;
        width: 2rem;
        background-color: white;
        border-radius: 0 0 100% 0;
        border-right: 2px solid black;
        border-bottom: 2px solid black;
        margin-right: -2.5rem;
        z-index: 1;
    }

`

export const OptionsPiu = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 1rem 0 ;
    
`

export const WrapperOptionsMakePiu = styled.div`
    width: 10rem;
    margin-left: 2rem;
    display: flex;
    justify-content: space-between;
    img{
        width: 2.5rem;
    }
`

export const AlertUser = styled.div<IAlertUser>`
    display: ${props => props.display ? "" : "none"};
    max-width: 16rem;
    margin-left: 1rem;
    text-align: center;
    font-weight: bold;
    color: red;
`

export const LaunchWrapper = styled.div<IPiuSize>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:  ${props => props.piuSize === 0 ? "12rem" : "18rem"};
    margin-right: 2.5rem;
    
    button{
        width: 12rem;
        height: 2.5rem;
        border: ${props => props.piuSize > 140 ? "1px solid black" : "none"};
        background: ${props => props.piuSize > 140 ? "red" : "black"};
        justify-self: flex-end;
        color: white;
        font-weight: bold;
        border-radius: 0.4rem;
        :hover{
            cursor: pointer;
        }
    }
`


export const CounterMakePiu = styled.div<IPiuSize>`
    font-size: 12px;
    margin-right: 0.5rem;
    display: ${props => props.piuSize === 0 ? "none" : "block"};
    p{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`
export const Emphasys = styled.div<IPiuSize>`
    color: #${ props => props.piuSize >= 140 ? "FF0000" : ( Number(((255/140)*props.piuSize).toFixed()).toString(16) )+"0000"};
    font-weight: ${
        props => props.piuSize > 90 ? (props.piuSize > 140 ? "bolder" : "bold") : "normal"
    };
`

export const PiuSection = styled.section`

`

export const InteractSuggestions = styled.aside`

`