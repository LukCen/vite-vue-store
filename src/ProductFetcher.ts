


/**
 * Fetches data from a passed endpoint.
 * @param apiLink Link to the endpoint
 * @returns Resolved promise in form of an array of objects
 */
export async function fetchProducts(apiLink: string) {
  try {
    const products = await fetch(apiLink)
    if (!products.ok) {
      throw new Error('Error fetching products.')
    }
    const data = await products.json()

    return data
  } catch (err) {
    console.error('Fetching failed:', err)
  }
}
