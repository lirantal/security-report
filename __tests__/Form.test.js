const Form = require('../src/Form')

const { prompt } = require('enquirer')
const nock = require('nock')

jest.mock('enquirer', () => {
  return {
    prompt: jest.fn()
  }
})

describe('Security Form', () => {
  test('Submitting form questions is successful', async () => {
    prompt.mockImplementation(() => {
      return Promise.resolve({
        name: 'its me',
        ecosystem: 'npm',
        module: 'dockly',
        severity: 'High',
        description: 'its mua!',
        email: 'dock@dockly.com'
      })
    })

    nock('https://snyk.io')
      .post('/wp-admin/admin-ajax.php')
      .reply(500, {
        errors: []
      })

    const form = new Form()
    await form.formQuestions()

    const { errors } = await form.submit()
    expect(errors).toEqual([])
  })

  test('Submitting form questions may return an error', async () => {
    prompt.mockImplementation(() => {
      return Promise.resolve({
        name: 'its me',
        ecosystem: 'npm',
        module: 'dockly',
        severity: 'High',
        description: 'its mua!',
        email: ''
      })
    })

    const mockError = { 81: 'Email is invalid' }
    nock('https://snyk.io')
      .post('/wp-admin/admin-ajax.php')
      .reply(500, {
        errors: mockError
      })

    const form = new Form()
    await form.formQuestions()

    const { errors } = await form.submit()
    expect(errors).toEqual(mockError)

    const mapErrorToField = Form.getFieldNameById(81)
    expect(mapErrorToField).toBe('Email')
  })
})
