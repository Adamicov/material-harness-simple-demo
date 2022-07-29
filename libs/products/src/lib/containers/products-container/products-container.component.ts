import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../infrastracture/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../domain/product';

@Component({
  selector: 'lib-products-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent {
  allProducts$: Observable<Product[]> = this.productsService.getAllProducts();

  constructor(private readonly productsService: ProductService) {}

  selectProduct(productId: string): void {
    this.productsService.selectProduct(productId);
  }
}
