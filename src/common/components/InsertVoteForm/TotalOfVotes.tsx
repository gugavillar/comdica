import { Text } from '@chakra-ui/react'
import { Control, useFormContext, useWatch } from 'react-hook-form'

import { FormValues } from './ContainerForm'

export const TotalOfVotes = () => {
  const { control }: { control: Control<FormValues> } =
    useFormContext<FormValues>()
  const formValues = useWatch({
    name: 'candidates',
    control
  })
  const totalVotes = formValues?.reduce(
    (acc, current) => acc + (current.votes || 0),
    0
  )

  return <Text>Total votos no cadastro: {totalVotes}</Text>
}
