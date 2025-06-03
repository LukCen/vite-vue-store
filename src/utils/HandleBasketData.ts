// TODO : change the key to something more descriptive ?



/**
 * Helper function for handling adding and parsing basket contents, used in the Basket page later
 * @param contents - A single, unique product added to the basket. Adding duplicates increments the 'quantity' parameter.
 */
export function handleBasketData(contents: BasketDataItem): void {
  if (localStorage.getItem(contents.id)) {
    const currentRawItemData = localStorage.getItem(contents.id)
    if (currentRawItemData !== null) {
      const parsed: BasketDataItem = JSON.parse(currentRawItemData)
      parsed.quantity = parsed.quantity + contents.quantity
      localStorage.setItem(contents.id, JSON.stringify(parsed))
    }
  } else {
    localStorage.setItem(contents.id, JSON.stringify(contents))
  }
}


/**
 * Helper object for storing API endpoints in easier to work with form.
 */
export const api = {
  base: "https://dummyjson.com",
  get products() {
    return this.base + "/products"
  },
  get categories() {
    return this.products + "/categories"
  }
}
