import medusa from './medusa'

export const getAllProducts = async (): Promise<{ label: string; value: string }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { label: 'Product 1', value: 'product-1' },
        { label: 'Product 2', value: 'product-2' },
        { label: 'Product 3', value: 'product-3' },
      ])
    }, 50)
  })
}
