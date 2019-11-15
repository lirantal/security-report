const Avatars = require('../src/AnalystsAvatars')

describe('Avatars', () => {
  test('Avatars should be export as an array of profiles', () => {
    const avatarsList = Avatars.avatars
    expect(Array.isArray(avatarsList)).toBeTruthy()
    expect(avatarsList.length).toBeTruthy()
  })
})
