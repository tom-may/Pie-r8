
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'admin', first_name: 'Ad', last_name: 'Min', email: 'tommay90@gmail.com', location: 'Queenstown', password: 'admin123', admin: true, time: '1614724412301'},
        {id: 2, username: 'Tom', first_name: 'Tom', last_name: 'May', email: 'tommay90@gmail.com', location: 'Queenstown', password: 'tom', admin: false, time: '1614724412301'},
        {id: 3, username: 'Pie-mon', first_name: 'Simon', last_name: 'Brash', email: 'simon@brash.com', location: 'Wellingon', password: 'simon', admin: false, time: '1614724412301'},
        {id: 4, username: 'Zach-and-cheese', first_name: 'Zach', last_name: 'Simm', email: 'zach@zach.com', location: 'Wellington', password: 'zach', admin: false, time: '1614724412301'}
      ]);
    });
};
