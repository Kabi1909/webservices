function findMaxPurchase(budget, keyboardPrices, mousePrices) {
  let maxPurchase = -1;

  for (let keyboardPrice of keyboardPrices) {
    for (let mousePrice of mousePrices) {
      let totalCost = keyboardPrice + mousePrice;

      if (totalCost <= budget && totalCost > maxPurchase) {
        maxPurchase = totalCost;
      }
    }
  }

  return maxPurchase;
}

let budget = 60;
let keyboardPrices = [40, 50, 60];
let mousePrices = [5, 8, 12];

let result = findMaxPurchase(budget, keyboardPrices, mousePrices);
console.log(result);
