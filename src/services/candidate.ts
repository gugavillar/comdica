import { faunaAPI, faunaQ } from './fauna'
import { CandidatesType, FaunaGenericMultipleType } from '../@types'

export const getAllCandidates = () =>
  faunaAPI.query<FaunaGenericMultipleType<CandidatesType>>(
    faunaQ.Map(
      faunaQ.Paginate(faunaQ.Documents(faunaQ.Collection('candidate'))),
      faunaQ.Lambda('candidatesRef', faunaQ.Get(faunaQ.Var('candidatesRef')))
    )
  )

type InsertCandidateVotesParams = {
  candidates: Array<{
    id: string
    votes: number
  }>
}
export const insertCandidateVotes = async ({
  candidates
}: InsertCandidateVotesParams) =>
  await Promise.all(
    candidates.map((candidate) => {
      faunaAPI.query(
        faunaQ.Let(
          {
            votes: faunaQ.Select(
              ['data', 'votes'],
              faunaQ.Get(
                faunaQ.Ref(faunaQ.Collection('candidate'), candidate.id)
              )
            )
          },
          faunaQ.Update(
            faunaQ.Ref(faunaQ.Collection('candidate'), candidate.id),
            {
              data: {
                votes: faunaQ.Append([candidate.votes], faunaQ.Var('votes'))
              }
            }
          )
        )
      )
    })
  )
