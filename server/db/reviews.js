const connection = require('./connection')

function getReviews (db = connection) {
    return db('reviews')
}

function getReview (id, db = connection) {
    return db('reviews')
    .where(id,'id')
}

function addReview(review, db = connection) {
    return db('reviews')
    .insert(review, 'id')
    .then(ids = ids[0])
}

function deleteReview(id, db = connection) {
    return db('reviews')
    .where(id, 'id')
    .delete()
}


module.exports = {
    getReviews,
    getReview,
    addReview,
    deleteReview
}