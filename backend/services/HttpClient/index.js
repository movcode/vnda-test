const axios = require('axios')
const Header = require('../HttpHeader')

const HOSTAPI = 'https://demo.vnda.com.br/api/v2/'

const HttpClient = () => ({
  get: async (path, auth) =>
    await axios.get(`${HOSTAPI}${path}`, Header(auth)),

  post: async (path, data, auth) =>
    await axios.post(`${HOSTAPI}${path}`, data, Header(auth)),

  remove: async (path, auth) =>
    await axios.delete(`${HOSTAPI}${path}`, Header(auth)),

  update: async (path, params, auth) =>
    await axios.put(`${HOSTAPI}${path}`, params, Header(auth))
})

module.exports = HttpClient
