import { Flex, HStack } from '@chakra-ui/react'
import { CheckCircle, Minus } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { FormValues } from './ContainerForm'
import { Field } from './Field'
import { RemoveButtonFields } from './RemoveButtonFields'
import { useCandidate } from '../../context'

import { SelectField } from '.'

type ContainerFieldsProps = {
  removeFunction: () => void
  index: number
}

export const ContainerFields = ({
  removeFunction,
  index
}: ContainerFieldsProps) => {
  const { candidates } = useCandidate()

  const {
    register,
    formState: { errors }
  } = useFormContext<FormValues>()

  const candidatesOptions = candidates?.map((candidate) => ({
    labelOption: candidate?.name,
    valueOption: candidate?.id
  }))

  return (
    <Flex
      align='baseline'
      justify='space-between'
      width='full'
    >
      <HStack spacing={4}>
        <SelectField
          options={candidatesOptions}
          label='Nome do candidato'
          placeholder='Nome do candidato'
          {...register(`candidates.${index}.id` as const)}
          errorMessage={errors?.candidates?.[index]?.id?.message as string}
        />

        <Field
          label='Votos'
          placeholder='Quantidade de votos'
          type='number'
          {...register(`candidates.${index}.votes` as const, {
            valueAsNumber: true
          })}
          errorMessage={errors?.candidates?.[index]?.votes?.message}
          iconField={<CheckCircle />}
        />
      </HStack>
      {index >= 1 ? (
        <RemoveButtonFields
          width={32}
          p={0}
          _hover={{ bg: 'none' }}
          leftIcon={<Minus />}
          removeFunction={removeFunction}
        />
      ) : null}
    </Flex>
  )
}
