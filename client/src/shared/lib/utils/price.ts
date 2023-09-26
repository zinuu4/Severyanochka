export function getPriceWithBonus(price: number, bonus: number) {
  const oneTenth = price / 10;
  if (bonus > oneTenth) return (price - oneTenth).toFixed(2);
  return (price - bonus).toFixed(2);
}