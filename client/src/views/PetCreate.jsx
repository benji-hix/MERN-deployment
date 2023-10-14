import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import PetForm from '../components/PetForm';

const PetCreate = (props) => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState([]);
    const [uniqueError, setUniqueError] = useState([]);

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

    const createPet = pet => {
        setErrors([]);
        axios
        .post('http://localhost:8000/api/pets', pet)
        .then((res) => {
            navigate('/api/pets')
        })
        .catch((err) => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            // if (!unique) errorArr.push('Provided name is already in use by a different pet');
            setErrors(errorArr)
        });
    }


    return (
        <>
            <div className='container-nav-bar'>
                <h1>Pet Shelter</h1>
                <Link to={'/api/pets'}>back to home</Link>
            </div>
            <div className='view-main'>
                <PetForm
                    formMessage='Know a pet needing a home?'
                    submitButtonText='Add Pet'
                    onSubmitProp={createPet}
                    checkUnique={checkUnique}
                    initName=''
                    initType=''
                    initDescription=''
                    initSkill1=''
                    initSkill2=''
                    initSkill3=''
                    errors={errors}
                    uniqueError={uniqueError}
                />
                
            </div>
        </>
    )
};

export default PetCreate;
