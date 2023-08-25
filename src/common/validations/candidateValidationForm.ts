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
    candidates: yup.array().of(
      yup.object().shape({
        id: yup.string().required(),
        votes: yup
          .number()
          .positive()
          .transform((value) => (isNaN(value) ? undefined : value))
          .required()
      })
    )
  })
)
