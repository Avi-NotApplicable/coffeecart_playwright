import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { products } from '../test_data/products';
import { Checkout } from '../pages/Checkout';

test('add products to cart', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await expect(page).toHaveTitle(/Coffee cart/);

  let clickCount = 0;

  for (const product of products) {

    if (clickCount % 2 === 0) {
      await homePage.addNormalClickProduct(product);
    } else {
      await homePage.addRightClickProduct(product);
    }
  
    clickCount++;
  
    await homePage.toChinese(product);
    await homePage.PromoHandler();
  }

  const checkout = new Checkout(page);

  await checkout.switchToCart();
  await checkout.proceedToCheckout();
  await checkout.pay();
});