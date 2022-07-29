import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsContainerComponent } from './containers/products-container/products-container.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './infrastracture/product.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductsContainerComponent, ProductComponent],
  exports: [ProductsContainerComponent],
  providers: [ProductService],
})
export class ProductsModule {}
