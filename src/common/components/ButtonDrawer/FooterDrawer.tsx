import { DrawerFooter, Flex, Button } from '@chakra-ui/react'

type FooterDrawerProps = {
  onClose: () => void
}

export const FooterDrawer = ({ onClose }: FooterDrawerProps) => {
  return (
    <DrawerFooter>
      <Flex
        align='center'
        gap={4}
      >
        <Button
          variant='outline'
          onClick={onClose}
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
