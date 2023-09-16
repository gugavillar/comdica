import { Client } from 'fauna'

export const faunaAPI = new Client({
  secret: import.meta.env.VITE_FAUNA_KEY
})
