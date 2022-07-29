import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsContainerComponent } from './products-container.component';
import { ProductComponent } from '../../product/product.component';
import { ProductService } from '../../infrastracture/product.service';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ProductComponentHarness } from '../../product/product.component-harness';
import { PRODUCTS_STUB } from '../../domain/products.stub';
import { of } from 'rxjs';

describe('ProductsContainerComponent', () => {
  let component: ProductsContainerComponent;
  let fixture: ComponentFixture<ProductsContainerComponent>;
  let harnessLoader: HarnessLoader;
  let productsService: ProductService;

  const given = async (products = PRODUCTS_STUB) => {
    await TestBed.configureTestingModule({
      declarations: [ProductsContainerComponent, ProductComponent],
      providers: [
        {
          provide: ProductService,
          useValue: <ProductService>{
            getAllProducts: jest.fn(() => of(products)),
            selectProduct: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsContainerComponent);
    component = fixture.componentInstance;
    harnessLoader = TestbedHarnessEnvironment.loader(fixture);
    productsService = TestBed.inject(ProductService);
    fixture.detectChanges();
  };

  it('should create', async () => {
    await given();
    expect(component).toBeTruthy();
  });

  it('should get all products', async () => {
    await given();
    const productsHarnesses = await harnessLoader.getAllHarnesses(
      ProductComponentHarness
    );
    expect(productsHarnesses.length).toEqual(2);
  });

  it('should select known product', async () => {
    await given();
    const productHarness = await harnessLoader.getAllHarnesses(
      ProductComponentHarness
    );
    await productHarness[0].click();
    fixture.detectChanges();

    expect(productsService.selectProduct).toHaveBeenCalledWith(
      PRODUCTS_STUB[0].id
    );
  });

  it('should display price for known product', async () => {
    await given([{ ...PRODUCTS_STUB[0], price: 34.95 }]);
    const productHarness = await harnessLoader.getAllHarnesses(
      ProductComponentHarness
    );
    const priceDisplay = await productHarness[0].getPrice();
    expect(priceDisplay).toEqual('34.95$')
  });
});
