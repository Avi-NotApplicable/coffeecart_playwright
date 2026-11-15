
import { Page } from '@playwright/test';

export class Checkout {
  constructor(private page: Page) {}

  async switchToCart() {
    await this.page.locator('a[href="/cart"]').click();
  }

  async proceedToCheckout() {
    await this.page.locator('button.pay').click();
  }

  async pay() {
    await this.page.locator('input#name').fill('test_username');
    await this.page.locator('input#email').fill('test_email@example.com');
    await this.page.locator('button#submit-payment').click();
  }
}
