const prices = [20, 15, 30, 40, 55];

prices.forEach((price, idx) => {
  console.log(idx, price);
});

const newPrices = prices.map((price) => {
  //แก้ไขและรีเทิร์นสมาชิกที่มีการแก้ไขแล้วทุกตัว
  return price * 1.1;
});

console.log(newPrices);

const premiumPrices = newPrices.filter((price) => {
  return price > 30;
}); //รีเทิร์นค่าที่มีการ filter ไว้แล้ว

console.log(premiumPrices);

sumPrice = newPrices.reduce((prevVal, price) => {
  return prevVal + price;
});

console.log(sumPrice);
