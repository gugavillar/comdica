import { Fragment } from 'react'

import { VStack } from '@chakra-ui/react'
import { CheckCircle, Minus } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useQuery } from 'react-query'

import { Field } from './Field'
import { RemoveButtonFields } from './RemoveButtonFields'
import { getAllCandidatesOrderByNameToSelectField } from '../../../services/candidate'
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
  const { data, isLoading } = useQuery(
    'candidatesFields',
    getAllCandidatesOrderByNameToSelectField,
    {
      staleTime: Infinity,
      select: (candidates) => candidates?.data?.data
    }
  )
  const {
    register,
    formState: { errors }
  } = useFormContext<FormCandidateValues>()

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
          options={data}
          label='Selecione o candidato'
          placeholder='Selecione o candidato'
          {...register(`candidates.${index}.id` as const)}
          errorMessage={errors?.candidates?.[index]?.id?.message as string}
          isDisabled={isLoading}
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
