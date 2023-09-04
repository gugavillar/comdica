import { Table, TableContainer } from '@chakra-ui/react'
import { useQuery } from 'react-query'

import { TableContent } from './TableContent'
import { candidatesSortTable } from '../../../helpers'
import { getAllCandidates } from '../../../services/candidate'
import { CircularLoader } from '../Loader'

export const ContainerCandidateListTable = () => {
  const { data, isLoading } = useQuery('candidatesTable', getAllCandidates, {
    staleTime: Infinity,
    select: (candidates) => candidates?.data?.sort(candidatesSortTable)
  })

  return (
    <TableContainer
      maxWidth='70rem'
      mx='auto'
      mt={6}
      border='1px solid'
      borderColor='gray.200'
      borderRadius={8}
      boxShadow='base'
    >
      {isLoading ? (
        <CircularLoader circularProps={{ size: 40 }} />
      ) : (
        <Table size='lg'>
          <TableContent sortCandidates={data} />
        </Table>
      )}
    </TableContainer>
  )
}
