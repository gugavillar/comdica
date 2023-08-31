export type FaunaGenericUniqueType<T> = {
  data: T
  ref: {
    value: { id: string }
  }
  ts: number
}

export type FaunaGenericMultipleType<T> = {
  data: Array<{
    data: T
    ref: {
      value: { id: string }
    }
    ts: number
  }>
}

export type CandidatesType = {
  name: string
  votes: Array<number>
  number: number
}
