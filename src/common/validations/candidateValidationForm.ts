import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório.'
  },
  number: {
    positive: 'Apenas números positivos.'
  }
})

export const candidateResolver = yupResolver(
  yup.object().shape({
    candidates: yup
      .array()
      .of(
        yup.object().shape({
          id: yup
            .string()
            .test('isSameCandidate', (value, ctx) => {
              if (ctx?.from?.[1]?.value?.candidates?.length > 1) {
                const indexField = Number(ctx?.path?.replace(/\D/g, ''))
                const isEqual = ctx?.from?.[1]?.value?.candidates?.some(
                  (val: { id: string }, index: number) =>
                    val?.id === value && index !== indexField
                )
                if (isEqual)
                  return ctx?.createError({
                    path: ctx?.path,
                    message: 'Candidato já selecionado anteriormente.'
                  })
              }
              return true
            })
            .required(),
          votes: yup
            .number()
            .positive()
            .transform((value) => (isNaN(value) ? undefined : value))
            .required()
        })
      )
      .default([{ id: '', votes: 0 }])
  })
)
