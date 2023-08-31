import { faunaAPI, faunaQ } from './fauna'
import { FaunaGenericUniqueType } from '../@types'

export const checkLogin = () => {
  return faunaAPI.query<FaunaGenericUniqueType<{ name: string }>>(
    faunaQ.Get(faunaQ.Ref(faunaQ.Collection('user'), '374437064074068049'))
  )
}
