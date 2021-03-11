
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('properties').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
        { id: 1, name: 'Fix Federation', address: ' Shop 5/79 High Street, Hutt Central, Lower Hutt 5010', best_pie: 'Steak and Mushroom', avg_score: '4.40', time: '1614724412301'},
        { id: 2, name: 'Arrowtown Bakery & Cafe', address: '14 Buckingham Street, Arrowtown 9302', best_pie: 'Mince and Cheese', avg_score: '2.20', time: '1614724412301'},
        { id: 3, name: 'Fairlie Bakehouse', address: '74 Main Street, Fairlie 7925', best_pie: 'Vegan Curry Lentil', avg_score: '4.80', time: '1614724412301'}
      ]);
    });
};
