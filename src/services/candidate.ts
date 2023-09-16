import { QuerySuccess, fql } from 'fauna'

import { faunaAPI } from './fauna'
import { CandidatesType, SelectFieldOptions } from '../@types'

type GetAllCandidatesOrderByVotesReturn = {
  data: Array<CandidatesType>
  after?: string | null
}

type GetAllCandidatesOrderByNameReturn = {
  data: Array<SelectFieldOptions>
  after?: string | null
}

export const getAllCandidatesOrderByNameToSelectField = (): Promise<
  QuerySuccess<GetAllCandidatesOrderByNameReturn>
> => {
  const queryAllCandidatesOrderByName = fql`
    candidate.all().map(cand => ({labelOption: cand.name, valueOption: cand.id})).order(asc(.labelOption)).paginate(40)
  `
  return faunaAPI.query(queryAllCandidatesOrderByName)
}

export const getAllCandidatesOrderByVotes = (): Promise<
  QuerySuccess<GetAllCandidatesOrderByVotesReturn>
> => {
  const queryAllCandidatesOrderByVotes = fql`
    candidate.all().map(cand => ({id: cand.id, name: cand.name, number: cand.number, votes: cand.votes.aggregate(0, (a,b) => a + b)})).order(desc(.votes)).paginate(40)
  `
  return faunaAPI.query(queryAllCandidatesOrderByVotes)
}

type InsertCandidateVotesParams = {
  candidates: Array<{
    id: string
    votes: number
  }>
}

export const insertCandidateVotes = async ({
  candidates
}: InsertCandidateVotesParams) => {
  return await Promise.all(
    candidates.map(async (candidate) => {
      const queryCandidateById = fql`
      candidate.byId(${candidate.id})
    `
      const {
        data: { votes }
      }: { data: { votes: Array<number> } } =
        await faunaAPI.query(queryCandidateById)

      const queryUpdateCandidateVotes = fql`
        candidate.byId(${candidate.id})?.update({votes: ${votes}?.append(${candidate.votes})})
      `
      return await faunaAPI.query(queryUpdateCandidateVotes)
    })
  )
}
