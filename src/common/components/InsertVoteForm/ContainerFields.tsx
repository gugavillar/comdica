import { Fragment } from 'react'

import { VStack } from '@chakra-ui/react'
import { CheckCircle, Minus } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { Field } from './Field'
import { RemoveButtonFields } from './RemoveButtonFields'
import { useCandidate } from '../../context'
import { FormCandidateValues } from '../ButtonDrawer/DrawerContainer'

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
  } = useFormContext<FormCandidateValues>()

  const candidatesOptions = candidates?.map((candidate) => ({
    labelOption: candidate?.name,
    valueOption: candidate?.id
  }))

  return (
    <Fragment>
      <VStack
        spacing={2}
        width='full'
        align='flex-start'
        {...(index >= 1 && { mt: 4 })}
      >
        {index >= 1 ? (
          <RemoveButtonFields
            height='max-content'
            p={0}
            alignSelf='end'
            _hover={{ bg: 'none' }}
            leftIcon={<Minus />}
            removeFunction={removeFunction}
          />
        ) : null}
        <SelectField
          options={candidatesOptions}
          label='Selecione o candidato'
          placeholder='Selecione o candidato'
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
      </VStack>
    </Fragment>
  )
}
