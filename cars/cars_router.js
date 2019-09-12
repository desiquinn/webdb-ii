const express = require('express');
const Cars = require('./cars_model.js')

const router = express.Router();

router.get('/', (req, res) => {
    Cars.find()
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: 'Error while reading data'})
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Cars.findById(id)
        .then(cars => {
            if(cars) {
                res.status(200).json(cars);
            } else {
                res.status(404).json({message: 'Car with specified id does not exsist'});
            }
        })
        .catch (err => {
            console.log(err);
            res.status(500).json({error: 'Error while reading data'})
        })
});

router.post('/', (req, res) => {
    const car = req.body;
    Cars.insert(car)
        .then(car => {
            if(car) {
                res.status(200).json(car);
            } else {
                res.status(400).json({message: 'Please include required data'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: 'Error while adding data'})
        })
})

module.exports = router;