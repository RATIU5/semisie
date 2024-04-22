import Medusa from '@medusajs/medusa-js'

const medusa = new Medusa({
  baseUrl: process.env.MEDUSA_BACKEND_URL ?? '',
  maxRetries: 2,
  apiKey: 'pk_01HW3NCE13G7D69Z33Q2064VGA',
})

export default medusa
