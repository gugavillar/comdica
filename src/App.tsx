import { Fragment } from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { Box } from '@chakra-ui/react'

import {
  ContainerCandidateListTable,
  ButtonDrawer,
  Header
} from './common/components'

export const App = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <Fragment>
      <Header />
      <Box p={4}>
        {isAuthenticated ? <ButtonDrawer /> : null}
        <ContainerCandidateListTable />
      </Box>
    </Fragment>
  )
}
