const bugs = require("./00-cf_bugs.json")

exports.seed = function(knex) {
  return knex.raw('TRUNCATE TABLE cf_bugs RESTART IDENTITY CASCADE')
    .then(function () {
      return knex("cf_bugs").insert(bugs)
    })
};
