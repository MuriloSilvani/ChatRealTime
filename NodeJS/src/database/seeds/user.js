
exports.seed = function (knex) {
  return knex('user').insert([
    {
      name: 'Murilo Silvani',
      email: 'murilo.silvani@gmail.com',
      login: 'murilo.silvani',
      password: 'password'
    }, {
      name: 'Outro Usuário',
      email: 'outro.usuario@gmail.com',
      login: 'outro.usuario',
      password: 'password'
    }
  ]);
};