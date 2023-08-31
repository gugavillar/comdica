import {
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Box,
  useToast
} from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { BodyDrawer } from './BodyDrawer'
import { FormCandidateValues } from './DrawerContainer'
import { FooterDrawer } from './FooterDrawer'
import { insertCandidateVotes } from '../../../services/candidate'

type DrawerContainerBodyProps = {
  onClose: () => void
}

export const DrawerContainerBody = ({ onClose }: DrawerContainerBodyProps) => {
  const { handleSubmit } = useFormContext<FormCandidateValues>()

  const queryCache = useQueryClient()
  const toast = useToast()
  const mutation = useMutation(insertCandidateVotes)

  const onSubmitHandler = async (values: FormCandidateValues) => {
    try {
      await mutation.mutateAsync(values)
      toast({
        status: 'success',
        description: 'Votos inseridos com sucesso.',
        onCloseComplete: () => queryCache.invalidateQueries('candidates')
      })
    } catch {
      toast({
        status: 'error',
        description: 'Falha ao inserir os votos.'
      })
    } finally {
      onClose()
    }
  }

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
