import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Main from './views/Main';
import PetDetail from './views/PetDetail';
import PetUpdate from './views/PetUpdate';
import PetCreate from './views/PetCreate';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/api/pets" />} />
                <Route path="/api/pets" element={<Main />} />
                <Route path="/api/pets/new" element={<PetCreate />} />
                <Route path='/api/pets/:id' element={<PetDetail/>} />
                <Route path='/api/pets/:id/edit' element={<PetUpdate/>}/>
            </Routes>
        </>
    );
}

export default App;
