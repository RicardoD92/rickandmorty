import { Link } from "react-router-dom";

const CharacterCard = ({ id, name, gender, image }) => {
    return(
        <div style={{ justifyContent: 'center', padding: '2rem', marginLeft: '800px' }} >
            <img src={image} alt={name} style={{ borderRadius: '9999999999rem' }} />

            <Link to={`/detail/${id}`} >
                <h2>{name}</h2>
            </Link>

            <h3>Gender: {gender}</h3>
        </div>
    )
}


export default CharacterCard;