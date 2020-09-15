import axios from 'axios'
import Header from '../HttpHeader'

const HOSTAPI = 'http://localhost:3000/api/'

const HttpClient = () => ({
  get: async (path: string, auth: boolean = false) =>
    await axios.get(`${HOSTAPI}${path}`, Header(auth)),

  post: async (path: string, data: any, auth: boolean = false) =>
    await axios.post(`${HOSTAPI}${path}`, data, Header(auth)),

  remove: async (path: string, auth: boolean) =>
    await axios.delete(`${HOSTAPI}${path}`, Header(auth)),

  update: async (path: string, auth: boolean) =>
    await axios.put(`${HOSTAPI}${path}`, Header(auth))
})

export default HttpClient
