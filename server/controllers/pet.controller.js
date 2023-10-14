const Pet = require('../models/Pet.model');

//* Read all 
module.exports.findAllPets = (req, res) => {
    Pet.find().sort({type:1})
        .then( allPets => {
            res.json({allPets})
        })
        .catch( (err) => {
            res.json(err)
        });
}

//* Read one
module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then( onePet => res.json({onePet}))
        .catch( err => {
            res.json(err)
        });
}

//* Read one by name (blackbelt)
module.exports.findByName = (req, res) => {
    Pet.findOne({ name: req.params.name })
    .then( onePet => res.json({onePet}))
    .catch( err => res.json(err))
}

//* Create
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => {
            res.json({newPet})
        })
        .catch( err => {
            res.status(400).json(err)
        });
}

//* Update
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedPet => {
            res.json({updatedPet})
        })
        .catch( err => {
            res.status(400).json(err)
        });
}

//* Delete
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch( err => {
            res.json(err)
        });
}