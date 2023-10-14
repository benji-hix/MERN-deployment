import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PetDetail = (props) => {
    const { id } = useParams();
    const removeFromDom = props;
    const [pet, setPet] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pets/' + id)
            .then((res) => {
                setPet(res.data.onePet);
                console.log(pet);
            })
            .catch((err) => console.log(err));
    }, []);

    const deletePet = () => {
        axios.delete('http://localhost:8000/api/pets/' + id)
            .then(res => {
                navigate('/api/pets')
            })
            .catch( err => console.error(err))
    }

    return (
        <>
            <div className='container-nav-bar'>
                <h1>Pet Shelter</h1>
                <Link to={'/api/pets'}>back to home</Link>
            </div>
            
            <div className='container-header'>
                <h2>Details about {pet.name}</h2>
                <button onClick={deletePet} className='button'>Adopt {pet.name}</button>
            </div>

            <div className='view-main'>
                <div className='br1 br-white-1 p1'>
                    <div className='container-info'>
                        <p className='column-left'><b>Pet type:</b></p>
                        <p>{pet.type}</p>
                    </div>
                    <div className='container-info'>
                        <p className='column-left'><b>Description:</b></p>
                        <p>{pet.description}</p>
                    </div>
                    <div className='container-info'>
                        <p className='column-left'><b>Skills:</b></p>
                        <div>
                            <p>{pet.skill1}</p>
                            <p>{pet.skill2}</p>
                            <p>{pet.skill3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PetDetail;
