import { Fragment } from 'react'

import { BodyTable } from './BodyTable'
import { HeaderTable } from './HeaderTable'
import { CandidatesType } from '../../../@types'

export type TableContentProps = {
  sortCandidates:
    | Array<{
        data: CandidatesType
        ref: {
          value: {
            id: string
          }
        }
        ts: number
      }>
    | undefined
}

export const TableContent = ({ sortCandidates }: TableContentProps) => {
  return (
    <Fragment>
      <HeaderTable />
      <BodyTable sortCandidates={sortCandidates} />
    </Fragment>
  )
}
