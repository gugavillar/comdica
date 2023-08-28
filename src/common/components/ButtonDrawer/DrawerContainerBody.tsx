import {
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Box
} from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import { BodyDrawer } from './BodyDrawer'
import { FormCandidateValues } from './DrawerContainer'
import { FooterDrawer } from './FooterDrawer'

type DrawerContainerBodyProps = {
  onClose: () => void
}

export const DrawerContainerBody = ({ onClose }: DrawerContainerBodyProps) => {
  const { handleSubmit } = useFormContext<FormCandidateValues>()

  const onSubmitHandler = (values: FormCandidateValues) => console.log(values)

  return (
    <Box
      as='form'
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cadastro de votos</DrawerHeader>
        <BodyDrawer />
        <FooterDrawer onClose={onClose} />
      </DrawerContent>
    </Box>
  )
}
