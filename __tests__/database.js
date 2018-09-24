const setup = require('../test-setup')

let database
beforeAll(async () => database = await setup())

test(`it contains database`, () => {
  expect(database).toEqual(expect.any(Function))
})
