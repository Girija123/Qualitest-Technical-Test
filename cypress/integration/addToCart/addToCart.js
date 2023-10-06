/** @format */

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {
  chooseProductsAndAddToCart,
  navToCart,
} from "../../support/pages/homePage";
import {
  assertNumberOfItemsInCart,
  findLowPriceItemInCart,
  removeLowPriceItemInCart
} from "../../support/pages/cartPage";

before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

let minPrice;

Given("I add four random items to my cart", () => {
  cy.visit("/");
  chooseProductsAndAddToCart();
});

When("I view my cart", () => {
  navToCart();
});

Then("I find total four items listed in my cart", () => {
  assertNumberOfItemsInCart(4);
});

When("I search for lowest price item", () => {
  let lowestPrice=findLowPriceItemInCart();
  minPrice=lowestPrice;
});

And("I am able to remove the lowest price item from my cart",()=>{
  removeLowPriceItemInCart(minPrice);
});

Then("I am able to verify three items in my cart",()=>{
  assertNumberOfItemsInCart(3);
});




