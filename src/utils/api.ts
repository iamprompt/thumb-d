const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5001/thumb-d/us-central1'
    : 'https://us-central1-thumb-d.cloudfunctions.net'

const getApiURL = (endpoint: string) => `${baseUrl}/api/${endpoint}`

export { getApiURL }
