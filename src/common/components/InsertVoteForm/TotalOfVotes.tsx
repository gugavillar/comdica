import { Text } from '@chakra-ui/react'
import { Control, useFormContext, useWatch } from 'react-hook-form'

import { FormCandidateValues } from '../ButtonDrawer/DrawerContainer'

export const TotalOfVotes = () => {
  const { control }: { control: Control<FormCandidateValues> } =
    useFormContext<FormCandidateValues>()
  const formValues = useWatch({
    name: 'candidates',
    control
  })
  const totalVotes = formValues?.reduce(
    (acc, current) => acc + (current.votes || 0),
    0
  )

  return <Text textAlign='right'>Total votos no cadastro: {totalVotes}</Text>
}
