
import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://coffee-cart.app/');
  }

  async addRightClickProduct(productName: string) {
    await this.page
      .getByLabel(productName, { exact: true })
      .click({ button: 'right' });

    await this.page
      .getByRole('button', { name: 'Yes', exact: true })
      .click();
  }

  async addNormalClickProduct(productName: string) {
    await this.page
      .getByLabel(productName, { exact: true })
      .click();
  }

  async PromoHandler() {
    const promoButton = this.page.locator('button.yes');
  
    if (await promoButton.isVisible()) {
      await promoButton.click();
    }
  }

  async toChinese(productName: string) {
    const productCard = this.page
      .locator('li')
      .filter({ hasText: productName })
      .first();
  
    await productCard.locator('h4').dblclick();
  }
}
