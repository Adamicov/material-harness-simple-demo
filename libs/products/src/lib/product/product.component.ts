import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Product } from '../domain/product';

@Component({
  selector: 'lib-products-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product: Product;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  productClicked(): void {
    this.clicked.emit(this.product.id);
  }
}
