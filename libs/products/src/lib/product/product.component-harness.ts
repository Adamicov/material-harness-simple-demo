import { ComponentHarness } from '@angular/cdk/testing';

export class ProductComponentHarness extends ComponentHarness {
  static hostSelector = 'lib-products-product';

  async getPrice(): Promise<string> {
    const element = await this.locatorFor('#product-price')();
    return await element.text();
  }

  async getProductName(): Promise<string> {
    const element = await this.locatorFor('#product-name')();
    return await element.text();
  }

  async click(): Promise<void> {
    const element = await this.locatorFor('#product')();
    return await element.click()
  }
}
