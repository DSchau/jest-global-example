test(`it contains expected globals`, () => {
  expect(global.something).toBe(true)
  expect(global.other).toBe(false)
})
