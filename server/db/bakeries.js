const connection = require('./connection')

function getBakeries (db = connection) {
    return db('bakeries')
}

function getBakeryById(id, db = connection) {
    return db('bakeries')
    .where(id, 'id')
    .first()
}

function addBakery (bakery, db = connection) {
    return db('bakeries')
    .insert(bakery, 'id' )
    .then(ids = ids[0])
}

function updateBakery (id, name, address, db = connection) {
    return db('bakeries')
    .where(id,'id')
    .update({
        name: name,
        address: address
    })
}

function deleteBakery (id, db = connection) {
    return db('bakeries')
    .where(id,'id')
    .delete()
}

module.exports = {
    getBakeries,
    getBakeryById,
    addBakery,
    updateBakery,
    deleteBakery
}