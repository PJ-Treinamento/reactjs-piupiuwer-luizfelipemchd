import styled from "styled-components";

interface IErrorMessage{
    display: boolean;
}

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >img{
        margin-top: 5rem;
        width: 60rem;
    }

    form {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;       
    }



    button{
        margin-top: 2rem;
        width: 25rem;
        height: 4rem;
        border: none;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        background-color: #000;
        border-radius: 1rem;
        :hover{
            cursor: pointer;
        }
    }

`
export const PasswordWrapper = styled.div`
    padding-right: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 2rem;
        margin-top: 0;
        margin-left: -3rem;

        :hover{
            cursor: pointer;
        }
    }

`

export const InputBonito = styled.input`
    margin: 10px 0;
    width: 35rem;
    height: 4rem;
    padding-left: 1rem;
    border: none;
    background-color: #DDDDDD;
    color: #525252;
    

    &:focus{
        -moz-outline: none;
        outline: none;
        box-shadow: none;
    }

`
export const ErrorMessage = styled.div<IErrorMessage>`
    display: ${props => props.display ? "flex" : "none"};
    font-size: 12px;
`