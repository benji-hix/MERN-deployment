import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PetList from '../components/PetList';

const Main = (props) => {
    const [petList, setPetList] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pets')
            .then((res) => {
                setPetList(res.data.allPets);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
        <div className='container-nav-bar'>
            <h1>Pet Shelter</h1>
            <Link to={'/api/pets/new'}>add a pet to the shelter</Link>
        </div>
        <div className='view-main'>
            <h2>These pets are looking for a good home</h2>
            <PetList pets={petList}/>
        </div>
        </>
    );
};

export default Main;
