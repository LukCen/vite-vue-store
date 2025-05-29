// TODO : change the key to something more descriptive ?

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
