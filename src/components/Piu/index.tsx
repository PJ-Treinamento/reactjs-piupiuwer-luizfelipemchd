import React from "react";
import { useState } from "react";
import { Piu, PiuLike } from "../../models";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

import { BalloonCurve, BalloonPiu, BalloonWrapper, Delete, ImgWrapper, InteractOptions, Like, PiuDisplay, PiuWrapper, RightSide } from "./styles";
import  like from "../../assets/icons/like.svg"
import fav from "../../assets/icons/fav.png"
import faved from "../../assets/icons/faved.png"
import deletePiu from "../../assets/icons/delete.svg"
import stdPic from "../../assets/icons/goProfile.svg"

interface PiuMadeProps{
    username: string;
    img: string;
    id: string;
    content: string;
    likes: PiuLike[];
    selfMade: boolean;
    piuListState: { pius: Piu[], function: React.Dispatch<React.SetStateAction<Piu[]>>};
}

const PiuMade: React.FC<PiuMadeProps> = (props) =>{
    const [likeNumber, setLikeNumber] = useState<Number>(props.likes.length)
    const { user } = useAuth()
    const [situation, setSituation] = useState< {isLiked:boolean, isFaved: boolean} >( () => {
        const liked = props.likes.some( piuLike => piuLike.user.id === user.id)
        const favorited = user.favorites.some( piu => piu.id === props.id)
        return {isLiked: liked, isFaved: favorited} 
    })

    
    const favToogle = async () => {
        if(situation.isFaved){
            try{
                await api.post("/pius/unfavorite", { piu_id: props.id})
            }catch(error){
                console.log(error)
            }
        }else{
            try{
                await api.post("/pius/favorite", { piu_id: props.id})
            }catch(error){
                console.log(error)
            }
        }

        setSituation( { ...situation, isFaved: !situation.isFaved })
    }

    const likeToogle = async () => {
        try{
            await api.post("/pius/like", { piu_id: props.id })
            setSituation( { ...situation, isLiked: !situation.isLiked })
            setLikeNumber( Number(likeNumber) + (situation.isLiked ?  -1 : 1) )
        }catch(error){
            console.log(error)
        }
    } 

    const erasePiu = async () => {
        try{
            await api.delete("/pius", { data: { piu_id: props.id }})
            props.piuListState.function( props.piuListState.pius.filter( piu => piu.id !== props.id ))
        }catch(error){
            console.log(error)
        }
    }

    return (
        <PiuWrapper>
            <h5>{props.username}</h5>

            <PiuDisplay>

                <ImgWrapper>
                    <img src={props.img || stdPic} alt="" />
                </ImgWrapper>
                
                <BalloonWrapper>
                    <BalloonCurve></BalloonCurve>
                    <BalloonPiu>
                        <p>{props.content}</p>
                        <div></div>
                    </BalloonPiu>
                </BalloonWrapper>
            
            </PiuDisplay>

            <InteractOptions>
            
                <RightSide>
                    <div>
                        <b>{likeNumber}</b>
                        <Like src={like} alt="Like" onClick={e => likeToogle()} liked={situation.isLiked}/>
                    </div>
                    <img src={situation.isFaved ? faved : fav} alt="Favorite" onClick={e => favToogle()}/>
                </RightSide>

                <Delete>
                    {props.selfMade && <img src={deletePiu} alt="Delete" onClick={e => erasePiu()} />}   
                </Delete>
            </InteractOptions>
        </PiuWrapper>
    );
}

export default PiuMade;