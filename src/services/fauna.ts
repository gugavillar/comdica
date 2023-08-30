import { Client, query } from 'faunadb'

export const faunaAPI = new Client({
  secret: import.meta.env.VITE_FAUNA_KEY
})

export const faunaQ = query
