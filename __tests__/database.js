const setup = require('../test-setup')

let database
beforeAll(() => database = setup())

test(`it contains database`, () => {
  expect(database).toEqual(expect.any(Function))
})
