const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api/pets', PetController.findAllPets);
    app.get('/api/pets/:id', PetController.findOnePet);
    app.get('/api/pets/name/:name', PetController.findByName);
    app.patch('/api/pets/:id', PetController.updatePet);
    app.post('/api/pets', PetController.createPet);
    app.delete('/api/pets/:id', PetController.deletePet);
}