// TODO : change the key to something more descriptive ?

export function handleBasketData(contents: BasketDataItem): void {
  localStorage.setItem(`basketItem_${localStorage.length}`, JSON.stringify(contents))
}
