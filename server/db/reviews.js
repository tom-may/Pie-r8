const connection = require('./connection')

function getReviews (db = connection) {
    return db('reviews')
}

function getReview (id, db = connection) {
    return db('reviews')
    .where('id',id)
}

function addReview(review, db = connection) {
    return db('reviews')
    .insert(review, 'id')
    // .then(ids = ids[0])
}

function updateReview(id, title, pie, price, pros, cons, review, rating, db = connection) {
    return db('reviews')
    .where('id', id)
    .update({
        title: title,
        pie: pie,
        price: price,
        pros: pros,
        cons: cons,
        review: review,
        rating: rating
    })
}

function deleteReview(id, db = connection) {
    return db('reviews')
    .where('id', id)
    .delete()
}

module.exports = {
    getReviews,
    getReview,
    addReview,
    updateReview,
    deleteReview
}