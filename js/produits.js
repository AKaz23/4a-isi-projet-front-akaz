function afficherProduit(produit) {
  const tpl = document.importNode(document.getElementById("tpl-produit").content, true);

  tpl.querySelector(".nom").innerText = produit.name;
  tpl.querySelector(".description").innerText = produit.description;
  tpl.querySelector(".prix").innerText = (produit.price_cents / 100).toFixed(2) + " €";

  const texteStock = tpl.querySelector(".stock");
  if (!produit.is_available) {
    texteStock.innerText = "Indisponible";
    texteStock.classList.add("epuise");
  } else if (produit.stock_quantity > 0) {
    texteStock.innerText = "En stock : " + produit.stock_quantity;
  } else {
    texteStock.innerText = "Épuisé";
    texteStock.classList.add("epuise");
  }

  document.getElementById("liste-produits").appendChild(tpl);
}

async function chargerProduits() {
  const produits = await getProduits();
  for (const produit of produits) {
    if (produit.is_active) {
      afficherProduit(produit);
    }
  }
}

chargerProduits();
