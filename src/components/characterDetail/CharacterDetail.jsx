import { useParams } from "react-router-dom";
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getCharacterDetail, cleanCharacterDetail } from "../../redux/actions";
import * as actions from "../../redux/actions";
import React from "react";

const CharacterDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { image, name, species, origin, gender, status } = useSelector(state => state.characterDetail);

    React.useEffect(() => {
        dispatch(actions.getCharacterDetail(id))

        return () => dispatch(actions.cleanCharacterDetail())
    }, [])

    return(
        <div>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>Specie: {species}</p>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
            <p>Origin: {origin?.name}</p>
        </div>
    )
}

export default CharacterDetail;