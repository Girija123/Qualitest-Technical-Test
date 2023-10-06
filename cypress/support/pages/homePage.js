import { homePageSelectors } from "./homePageElements";
import { cartPageSelectors } from "./cartPageElements";

export function chooseProductsAndAddToCart() {
  for (let i = 0; i < 4; i++) {
    cy.get(homePageSelectors.products)
      .eq(i)
      .realHover()
      .within((product) => {
        cy.xpath('//a[text()="Add to cart"]').eq(i).click();
      });
  }
}

export function navToCart(){
    cy.get(homePageSelectors.menu).contains('Cart').click();
    cy.get(cartPageSelectors.cartPageTitle).should('have.text',"Cart");
}
