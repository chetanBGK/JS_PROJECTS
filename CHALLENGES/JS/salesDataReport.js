const sales = [
  { item: "Laptop", price: 70000, quantity: 2 },
  { item: "Phone", price: 30000, quantity: 5 },
  { item: "Monitor", price: 15000, quantity: 4 },
  { item: "Keyboard", price: 2000, quantity: 10 },
];

// Calculate total revenue using reduce.
// Create a new array with only item names and revenue.
let revenue = sales.map((soldItems) => {
  let totalRevenue = soldItems.price * soldItems.quantity;
  return { ...soldItems, totalRevenue };
});

revenue.forEach((items) =>
  console.log(`${items.item} : ${items.totalRevenue}`)
);

// Filter out items with revenue > ₹50,000 and sort by revenue descending.
console.log("items with revenue > ₹50,000");

let revenueGreaterThan50K = revenue.filter(
  (items) => items.totalRevenue > 50000
);

revenueGreaterThan50K.forEach((items) =>
  console.log(`${items.item} : ${items.totalRevenue}`)
);

// Filter out items with revenue >= ₹50,000 and sort by revenue descending.
let descendingByRevenue = revenueGreaterThan50K.sort(
  (a, b) => b.totalRevenue - a.totalRevenue
);

console.log(descendingByRevenue);
