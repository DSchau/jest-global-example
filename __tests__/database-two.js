const setup = require('../test-setup')

let database
beforeAll(async () => database = await setup())

test(`it does something`, () => {
  const result = database()

  expect(result).toBeUndefined()
})
