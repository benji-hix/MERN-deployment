import React from 'react';
import { Link } from 'react-router-dom';

const PetList = (props) => {

    return (
        <>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions Available:</th>
                </tr>
            </thead>
            <tbody>
        {props.pets.map((onePet) => {
                return (
                <tr className="container-pet" key={onePet._id}>
                    <td>{onePet.name}</td>
                    <td>{onePet.type}</td>
                    <td className='actions'>
                        <Link to={'/api/pets/' + onePet._id}>details</Link>
                         | 
                        <Link to={'/api/pets/' + onePet._id + '/edit'}>edit</Link>
                    </td>
                </tr>
                )})
        }
            </tbody>
        </table>
        </>
    )
}

export default PetList