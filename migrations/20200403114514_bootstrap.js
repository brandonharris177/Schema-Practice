
exports.up = function(knex) {
  return knex.schema
  .createTable('movies', tbl => {
      tbl.increments();
      tbl.number('year').notNullable();
      tbl.string('title').notNullable();
  })
  .createTable('actors', tbl => {
      tbl.increments();
      tbl.string('name');
  })
  .createTable('cast', tbl => {
      tbl.increments();
      tbl.integer(movie_id)
      .unsigned()
      .notNullable()
      .reference('id')
      .inTable('movies');
      tbl.integer(actor_id)
      .unsigned()
      .notNullable()
      .reference('id')
      .inTable('actors');
      tbl.string('character');
  })
};

exports.down = function(knex) {
  
};
