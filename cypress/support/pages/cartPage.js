/** @format */

import { cartPageSelectors } from "./cartPageElements";
export function assertNumberOfItemsInCart(expectedNumber) {
  cy.reload();
  cy.get(cartPageSelectors.cartItem,{timeout:1500}).then((itemsInCart) => {
    expect(itemsInCart.length).to.equal(expectedNumber);
  });
}
export function findLowPriceItemInCart() {
  let priceOfTheProductsInCart = [];
  let cartItemLength = Cypress.$(cartPageSelectors.cartItem).length;
  for (let i = 0; i < cartItemLength; i++) {
    let productPrice = Cypress.$(cartPageSelectors.priceLocator)
      .eq(i)
      .text()
      .substring(1);
    priceOfTheProductsInCart.push(productPrice);
  }
    var minPrice = priceOfTheProductsInCart[3];
    for (let i = 0; i < priceOfTheProductsInCart.length - 1; i++) {
      if (priceOfTheProductsInCart[i] < minPrice) {
        minPrice = priceOfTheProductsInCart[i];
      }
    }
    return minPrice;
}
export function removeLowPriceItemInCart(price){
    cy.contains('tr td', `${price}`)
    .siblings()
    .within(() => {
      cy.get('[aria-label="Remove this item"]').click();
    });
}
