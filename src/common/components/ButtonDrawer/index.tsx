import { Fragment } from 'react'

import { Button, useDisclosure } from '@chakra-ui/react'

import { DrawerContainer } from './DrawerContainer'

export const ButtonDrawer = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Fragment>
      <Button onClick={onOpen}>Adicionar votação</Button>
      <DrawerContainer
        isOpen={isOpen}
        onClose={onClose}
      />
    </Fragment>
  )
}
