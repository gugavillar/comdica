import { Drawer, DrawerOverlay } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'

import { DrawerContainerBody } from './DrawerContainerBody'
import { candidateResolver } from '../../validations'

export type FormCandidateValues = {
  candidates: Array<{
    id: string
    votes: number
  }>
}

type DrawerContainerProps = {
  isOpen: boolean
  onClose: () => void
}

export const DrawerContainer = ({ isOpen, onClose }: DrawerContainerProps) => {
  const methods = useForm<FormCandidateValues>({
    resolver: candidateResolver,
    defaultValues: {
      candidates: [{ id: '', votes: 0 }]
    },
    mode: 'onChange'
  })

  const handleCloseDrawer = () => {
    methods.reset()
    onClose()
  }

  return (
    <FormProvider {...methods}>
      <Drawer
        isOpen={isOpen}
        onClose={handleCloseDrawer}
        placement='right'
        size='md'
      >
        <DrawerOverlay />
        <DrawerContainerBody onClose={handleCloseDrawer} />
      </Drawer>
    </FormProvider>
  )
}
