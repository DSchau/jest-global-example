let database

module.exports = function setup() {
  if (!database) {
    database = function() {} // some heavy init code
  }
  return database
}
