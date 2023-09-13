import { CandidatesType, FaunaGenericUniqueType } from '../@types'

export const candidatesSortTable = (
  candidateA: FaunaGenericUniqueType<CandidatesType>,
  candidateB: FaunaGenericUniqueType<CandidatesType>
) => {
  const votesA = candidateA.data?.votes.reduce((acc, value) => acc + value, 0)
  const votesB = candidateB.data?.votes.reduce((acc, value) => acc + value, 0)

  if (votesB < votesA) return -1

  if (votesB > votesA) return 1

  return 0
}

export const candidatesSortField = (
  valueA: { labelOption: string },
  valueB: { labelOption: string }
) => {
  const optionA = valueA.labelOption.toUpperCase()
  const optionB = valueB.labelOption.toUpperCase()

  if (optionA < optionB) return -1

  if (optionA > optionB) return 1

  return 0
}

export const candidatesToSelectField = (
  candidate: FaunaGenericUniqueType<CandidatesType>
) => ({
  labelOption: candidate?.data?.name,
  valueOption: candidate?.ref?.value?.id
})
