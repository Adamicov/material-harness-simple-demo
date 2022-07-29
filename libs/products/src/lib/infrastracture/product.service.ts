import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../domain/product';
import { PRODUCTS_STUB } from '../domain/products.stub';

@Injectable()
export class ProductService {
  getAllProducts(): Observable<Product[]> {
    return of(PRODUCTS_STUB);
  }

  selectProduct(productId: string): void {}
}
