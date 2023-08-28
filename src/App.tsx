import { Heading, Box } from '@chakra-ui/react'

import { ACUTAL_YEAR } from './common'
import { ContainerCandidateListTable } from './common/components'
import { ButtonDrawer } from './common/components/ButtonDrawer'

export const App = () => {
  return (
    <Box p={4}>
      <Heading textAlign='center'>
        Apuração da eleição de conselheiro tutelar {ACUTAL_YEAR}
      </Heading>
      <ButtonDrawer />
      <ContainerCandidateListTable />
    </Box>
  )
}
