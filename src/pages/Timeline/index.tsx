import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { AxiosResponse } from "axios";
import { Piu } from "../../models";
import useAuth, { IUserData } from "../../hooks/useAuth";
import PiuMade from "../../components/Piu";

import { AlertUser, BalloonWritePiu, CounterMakePiu, DropdownWindow, Emphasys, Feed, Header, InteractSuggestions, LaunchWrapper, MenuHeader, OptionsPiu, PiuMaker, PiuSection, PiuTextarea, PiuTimeline, SearchBar, Unfilter, Wrapper, WrapperOptionsMakePiu, WrapperSearchBar, WritePiu } from "./styles";
import { BalloonCurve, BalloonWrapper, ImgWrapper } from "../../components/Piu/styles";

import miniLogo from "../../assets/images/miniLogo.svg"
import searchIcon from "../../assets/icons/searchIcon.svg"
import goHome from "../../assets/icons/goHome.svg"
import goProfile from "../../assets/icons/goProfile.svg"
import insertPic from "../../assets/icons/insertPic.svg"
import insertLink from "../../assets/icons/insertLink.svg"
import insertEmoji from "../../assets/icons/insertEmoji.svg"
import logOut from "../../assets/icons/logOut.svg"
import cancelFilter from "../../assets/icons/cancelFilter.svg"

const Timeline: React.FC = () =>{
    
    const [piuList, setPiuList] = useState<Piu[]>([] as Piu[]);
    const {token, user, setUserData} = useAuth()
    const [filterPius, setFilterPius] = useState<string>("");
    const [newPiu, setNewPiu] = useState<string>("");
    const [cleanFilter, setcleanFilter] = useState<boolean>(false);
    const [warningText, setWarningText] = useState<string>("");

    console.log(user.favorites);
    

    useEffect(() =>{
        const getPiuList = async () =>{
            try{
                const response: AxiosResponse<Piu[]> = await api.get("/pius", {});
                setPiuList(response.data)

            }catch(error){
                console.log(error)
                setPiuList( [] as Piu[])
            }
        }
        getPiuList();    
    }, [cleanFilter, user])

    const filterDisplayedPius = (userName: string) =>{
        setFilterPius(userName)
        setPiuList(
            piuList.filter( piu => piu.user.username === userName)
        )
    }

    const unfilterFeed = () =>{
        setFilterPius("")
        setcleanFilter(!cleanFilter)
    }

    const showDropdownList = () =>{
        const userNameList: {list: string[]} = { list: piuList
                                .map(piu => piu.user.username)
                                .filter(userName => userName.toLowerCase().includes(filterPius.toLocaleLowerCase()))
                                .filter( (userName, index, array) => array.indexOf(userName) === index)}
        
            return userNameList.list.length 
                ? (userNameList.list.map( (userName) => <li onClick={e => filterDisplayedPius(userName) }>{userName}</li> ))
                : <li>Nenhum Resultado</li>
    }

    const LaunchNewPiu = async () => {
        if(newPiu.length === 0){
            setWarningText("Vazio é so você: Escreva alguma coisa")
        }
        else if(newPiu.length > 140){
            setWarningText("Ninguém quer saber tanto assim!")
        }
        else{
            try{
                await api.post("/pius", { text: newPiu })
                setWarningText("");
                setNewPiu("");
                setcleanFilter(!cleanFilter)
            }catch(error){
                console.log(error);
            }
        }
    }

    const checkOut = () => {
        localStorage.removeItem("@Piupiuwer:token")
        localStorage.removeItem("@Piupiuwer:user")
        setUserData( {} as IUserData)
    }

    return(
        <Wrapper>

            <Header>
                <img src={miniLogo} alt="" />

                <WrapperSearchBar>

                    <SearchBar>
                        <img src={searchIcon} alt="" />
                        <input type="text" placeholder="Filtre por Username..." value={filterPius} onChange={e => setFilterPius(e.target.value)}/>
                        <Unfilter searchParam={filterPius}>
                            <img src={cancelFilter} alt="" onClick={e => unfilterFeed()}/>
                        </Unfilter>
                    </SearchBar>

                    <DropdownWindow searchParam={filterPius}>
                        {
                            showDropdownList()
                        }
                    </DropdownWindow>
                </WrapperSearchBar>

                <MenuHeader>
                    <li><img src={goHome} alt="Ir para feed" /></li>
                    <li><img src={goProfile} alt="Perfil" /></li>
                    <li><img src={logOut} alt="Sair" onClick={e => checkOut()} /></li>
                </MenuHeader>

            </Header>

            <Feed>
                <PiuTimeline>
                    <PiuMaker>
                        <WritePiu>
                            <ImgWrapper>
                                <img src={user ? user.photo : goProfile} alt="Foto de Perfil" />
                            </ImgWrapper>
                            

                            <BalloonWrapper>
                                <BalloonCurve></BalloonCurve>
                                <BalloonWritePiu>
                                    <PiuTextarea piuSize={newPiu.length}name="" id="" cols={45} rows={4} placeholder="Abre o bico..." value={newPiu} onChange={e => setNewPiu(e.target.value)}></PiuTextarea>
                                </BalloonWritePiu>
                            </BalloonWrapper>

                        </WritePiu>
                        
                        <OptionsPiu>

                            <WrapperOptionsMakePiu>
                                <img src={insertPic} alt="" />
                                <img src={insertLink} alt="" />
                                <img src={insertEmoji} alt="" />
                            </WrapperOptionsMakePiu>
                            
                            <AlertUser 
                            display={ 
                                    ((warningText === "Vazio é so você: Escreva alguma coisa") && !!!newPiu)
                                    || ((warningText === "Ninguém quer saber tanto assim!") && (newPiu.length > 140))
                                }>
                                {warningText}
                            </AlertUser>

                            <LaunchWrapper piuSize={newPiu.length}>

                                <CounterMakePiu piuSize={newPiu.length}>
                                    <p> <Emphasys piuSize={newPiu.length}>{newPiu.length}</Emphasys>/140</p>
                                </CounterMakePiu>
                                
                                <button onClick={e => LaunchNewPiu()}>Piuzar</button>
                            </LaunchWrapper>

                        </OptionsPiu>
                    </PiuMaker>

                    <PiuSection> 
                        {piuList.map( (piu: Piu) => <PiuMade username={piu.user.username} 
                                                    id={piu.id}
                                                    img={piu.user.photo} 
                                                    content={piu.text}
                                                    selfMade={piu.user.username === user.username}
                                                    piuListState={piu.user.username === user.username 
                                                        ? {pius: piuList, function: setPiuList }
                                                        : { pius: [] as Piu[], function: (() => {}) as React.Dispatch<React.SetStateAction<Piu[]>>} }
                                                    likes={piu.likes}
                                                    />)
                        }
                    </PiuSection>
                </PiuTimeline>

                <InteractSuggestions>

                </InteractSuggestions>
            </Feed>

        </Wrapper>
    );
}

export default Timeline;