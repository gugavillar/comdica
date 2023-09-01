import { Button, useDisclosure, Flex } from '@chakra-ui/react'

import { DrawerContainer } from './DrawerContainer'
import { buttonsProps } from '../..'

export const ButtonDrawer = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Flex
      mx='auto'
      w='full'
      align='center'
      justify='flex-end'
      maxWidth='70rem'
    >
      <Button
        onClick={onOpen}
        {...buttonsProps}
      >
        Adicionar votação
      </Button>
      <DrawerContainer
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  )
}
