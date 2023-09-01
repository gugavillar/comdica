import { Fragment, useMemo } from 'react'

import { VStack } from '@chakra-ui/react'
import { CheckCircle, Minus } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useQuery } from 'react-query'

import { Field } from './Field'
import { RemoveButtonFields } from './RemoveButtonFields'
import { getAllCandidates } from '../../../services/candidate'
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
  const { data, isLoading } = useQuery('candidates', getAllCandidates, {
    staleTime: Infinity
  })
  const {
    register,
    formState: { errors }
  } = useFormContext<FormCandidateValues>()

  const candidatesOptions = useMemo(
    () =>
      data?.data
        ?.map((candidate) => ({
          labelOption: candidate?.data?.name,
          valueOption: candidate?.ref?.value?.id
        }))
        .sort((valueA, valueB) => {
          const optionA = valueA.labelOption.toUpperCase()
          const optionB = valueB.labelOption.toUpperCase()

          if (optionA < optionB) return -1

          if (optionA > optionB) return 1

          return 0
        }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

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
