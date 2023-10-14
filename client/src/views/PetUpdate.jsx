import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PetForm from '../components/PetForm';

const PetUpdate = (props) => {
    const { id } = useParams();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');


    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [uniqueError, setUniqueError] = useState([]);

    const navigate = useNavigate();

    //* js.
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pets/' + id)
            .then((res) => {
                setName(res.data.onePet.name);
                setType(res.data.onePet.type);
                setDescription(res.data.onePet.description);
                setSkill1(res.data.onePet.skill1);
                setSkill2(res.data.onePet.skill2);
                setSkill3(res.data.onePet.skill3);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    const updatePet = (pet) => {
        axios
            .patch('http://localhost:8000/api/pets/' + id, pet)
            .then((res) => {
                console.log('pet updated');
                navigate('/api/pets')
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            });

    };

    const checkUnique = name => {
        setUniqueError([])
        axios
            .get('http://localhost:8000/api/pets/name/' + name)
            .then((res) => {
                const result = res.data.onePet;
                if (result != null) {
                    setUniqueError(['Provided name is already in use by a different pet'])
                }
            })
            .catch((err) => console.log('err'));
    }

    return (
        <>
            <div className='container-nav-bar'>
                <h1>Pet Shelter</h1>
                <Link to={'/api/pets'}>back to home</Link>
            </div>
            <div className='view-main'>
                {loaded && (
                    <PetForm 
                    formMessage={'Edit ' + name}
                    submitButtonText='Edit Pet'
                    onSubmitProp={updatePet}
                    checkUnique={checkUnique}
                    initName={name}
                    initType={type}
                    initDescription={description}
                    initSkill1={skill1}
                    initSkill2={skill2}
                    initSkill3={skill3}
                    errors={errors}
                    uniqueError={uniqueError}
                    />
                    )}
            </div>
        </>
    );
};

export default PetUpdate;
