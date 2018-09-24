const setup = require('../test-setup')

let database
beforeAll(() => database = setup())

test(`it does something`, () => {
  const result = database()

  expect(result).toBeUndefined()
})
