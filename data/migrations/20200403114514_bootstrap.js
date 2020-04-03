  
exports.up = function(knex) {
    return knex.schema
      .createTable('movies', tbl => {
        tbl.increments();
        tbl
        .integer('year')
        .notNullable();
        tbl
        .string('title')
        .notNullable();
      })
      .createTable('actors', tbl => {
        tbl.increments('id');
        tbl
        .string('name')
        .notNullable();
      })
      .createTable('cast', tbl => {
        tbl.increments();
        tbl
          .integer('movie_id')
          .notNullable()
          .references('id')
          .inTable('movies');
        tbl
          .integer('actor_id')
          .references('id')
          .inTable('actors');
        ;
        tbl
          .string('character')
          .notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('cast')
      .dropTableIfExists('actors')
      .dropTableIfExists('movies');
  };
