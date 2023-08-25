import { Button, Flex } from '@chakra-ui/react'

import { TotalOfVotes } from './TotalOfVotes'

export const ContainerFooterForm = () => {
  return (
    <Flex
      align='center'
      justify='space-between'
      mt={6}
    >
      <Button
        fontSize='sm'
        type='submit'
        width={32}
      >
        Cadastrar
      </Button>
      <TotalOfVotes />
    </Flex>
  )
}
