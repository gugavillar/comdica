import { DrawerFooter, Flex, Button } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import { FormCandidateValues } from './DrawerContainer'

type FooterDrawerProps = {
  onClose: () => void
}

export const FooterDrawer = ({ onClose }: FooterDrawerProps) => {
  const { reset } = useFormContext<FormCandidateValues>()

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <DrawerFooter>
      <Flex
        align='center'
        gap={4}
      >
        <Button
          variant='outline'
          onClick={handleClose}
          width={32}
        >
          Limpar
        </Button>
        <Button
          colorScheme='blue'
          width={32}
          type='submit'
        >
          Salvar
        </Button>
      </Flex>
    </DrawerFooter>
  )
}
