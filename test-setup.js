let database

module.exports = async function setup() {
  if (!database) {
    database = function() {} // some heavy init code
  }
  return database
}
