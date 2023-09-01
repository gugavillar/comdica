import { DrawerFooter, Flex, Button } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

type FooterDrawerProps = {
  onClose: () => void
}

export const FooterDrawer = ({ onClose }: FooterDrawerProps) => {
  const {
    formState: { isSubmitting }
  } = useFormContext()
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
          isDisabled={isSubmitting}
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
