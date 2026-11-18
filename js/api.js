const produitsFictifs = [
  {
    id: 1,
    name: "Sandwich jambon",
    description: "Pain frais, jambon, beurre",
    price_cents: 350,
    stock_quantity: 10,
    is_available: true,
    is_active: true
  },
  {
    id: 2,
    name: "Salade César",
    description: "Salade, poulet, parmesan",
    price_cents: 500,
    stock_quantity: 4,
    is_available: true,
    is_active: true
  },
  {
    id: 3,
    name: "Cookie",
    description: "Pépites de chocolat",
    price_cents: 120,
    stock_quantity: 0,
    is_available: true,
    is_active: true
  },
  {
    id: 4,
    name: "Soupe du jour",
    description: "Légumes de saison",
    price_cents: 400,
    stock_quantity: 6,
    is_available: false,
    is_active: true
  },
  {
    id: 5,
    name: "Ancien wrap",
    description: "Plus vendu",
    price_cents: 450,
    stock_quantity: 5,
    is_available: true,
    is_active: false
  }
];

async function getProduits() {
  return produitsFictifs;
}
