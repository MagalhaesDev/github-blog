import axios from 'axios'

export const apiGithub = axios.create({
  baseURL: 'api.github.com/users',
})
