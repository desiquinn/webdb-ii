const db = require('../db-config.js');

module.exports= {
    find,
    findById,
    insert, 
    update, 
    remove
};

function find() {
    return db('cars');
}

function findById(id) {
    return db('cars').where({id}).first();
}

function insert(car) {
    return db('cars')
        .insert(car)
        .then(([id]) => findById(id));
}

function update(id, car) {
    return db('cars')
        .where({id})
        .update(car)
        .then(([id]) => findById(id));
}

function remove(id) {
    return db('cars')
        .where({id})
        .del()
}