
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          id: 1, 
          user_Id: 2,
          bakery_ID: 1, 
          title: 'A triumph for the meatless pie',
          pie: 'Vegan Curry Lentil', 
          price: 6.95, 
          pros: 'Flaky Pastry, baby!',
          cons: "I should've bought two!",
          review: 'One of my most memorable pies to date. A symphony of crust, chew, flavor and adrenaline! ', 
          rating: 4,
          like_score: 5,
          time: '1614724412301'
        },
        {
          id: 2, 
          user_Id: 4,
          bakery_ID: 3,
          title: 'I would turn Vegan for this morsel of goodness from the gods', 
          pie: 'Vegan Curry Lentil', 
          price: 5.95,
          pros: 'Everything',
          cons: 'Nothing',
          review: 'How can a human put words to such a godly delight? Zeus himself would bow to the creators of the heavenly pie.', 
          rating: 5,
          like_score: 9999999,
          time: '1614724412301'
        }
      ]);
    });
};

