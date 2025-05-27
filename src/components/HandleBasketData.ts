export function handleBasketData(contents: BasketData): void {
  localStorage.setItem(`basketItem_${localStorage.length}`, JSON.stringify(contents))
}
