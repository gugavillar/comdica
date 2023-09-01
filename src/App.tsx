import { Fragment } from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { Heading, Box, Flex } from '@chakra-ui/react'

import { ACUTAL_YEAR } from './common'
import {
  ContainerCandidateListTable,
  ButtonDrawer,
  ButtonAuthenticator
} from './common/components'

export const App = () => {
  const { isAuthenticated } = useAuth0()
  return (
    <Fragment>
      <Flex
        h={20}
        width='full'
        px={6}
        align='center'
        justify='space-evenly'
      >
        <Heading>
          Apuração da eleição de conselheiro tutelar {ACUTAL_YEAR}
        </Heading>
        <ButtonAuthenticator />
      </Flex>
      <Box p={4}>
        {isAuthenticated ? <ButtonDrawer /> : null}
        <ContainerCandidateListTable />
      </Box>
    </Fragment>
  )
}
