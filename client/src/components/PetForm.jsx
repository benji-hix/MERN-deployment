import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PetForm = (props) => {
    const { initName, initType, initDescription, initSkill1, initSkill2, initSkill3, onSubmitProp, checkUnique } = props;
    const [name, setName] = useState(initName);
    const [type, setType] = useState(initType);
    const [description, setDescription] = useState(initDescription);
    const [skill1, setSkill1] = useState(initSkill1);
    const [skill2, setSkill2] = useState(initSkill2);
    const [skill3, setSkill3] = useState(initSkill3);

    const handleSubmit = (e) => {
        e.preventDefault();
        checkUnique(name);
        onSubmitProp({name, type, description, skill1, skill2, skill3});
    };

    return (
        <>
        <h2>{props.formMessage}</h2>
        <form onSubmit={handleSubmit} className='flex g1 w-content br1 br-main-2 p1'>
            <div className='form w25'>
                <h5>Pet Information</h5>
                <label htmlFor='form-name' className='input'>
                    <span>Pet Name:</span>
                    <input type='text' onChange={(e) => setName(e.target.value)} value={name} name='form-name'/>
                </label>
                <label htmlFor='form-type' className='input'>
                    <span>Pet Type:</span>
                    <input type='text' onChange={(e) => setType(e.target.value)} value={type} name='form-type'/>
                </label>
                <label htmlFor='form-name' className='input'>
                    <span>Pet Description:</span>
                    <input type='text' onChange={(e) => setDescription(e.target.value)} value={description} name='form-description'/>
                </label>
                <input type="submit" value={props.submitButtonText} className='button'/>
            </div>
            <div className='form w20'>
                <h5>Skills (Optional)</h5>
                <label htmlFor='form-skill1' className='input'>
                    <span>Skill 1:</span>
                    <input type='text' onChange={(e) => setSkill1(e.target.value)} value={skill1} name='form-skill1' />
                </label>
                <label htmlFor='form-skill2' className='input'> 
                    <span>Skill 2:</span>
                    <input type='text' onChange={(e) => setSkill2(e.target.value)} value={skill2} name='form-skill2' />
                </label>
                <label htmlFor='form-skill3' className='input'>
                    <span>Skill 3:</span>
                    <input type='text' onChange={(e) => setSkill3(e.target.value)} value={skill3} name='form-skill3' />
                </label>
            </div>
        </form>
        
        {props.errors.map( (err, idx) => <p key={idx} className='error'>Error: {err}</p>)}
        {props.uniqueError.map( (err, idx) => <p key={idx} className='error'>Error: {err}</p>)}
        </>
    );
};

export default PetForm;