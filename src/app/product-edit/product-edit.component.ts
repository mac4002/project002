import { Component } from '@angular/core';
import { Product, NEW_PRODUCT} from '../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  private firstProduct: Product;
  private objClasses: object;

  constructor() {
    this.firstProduct = NEW_PRODUCT;
    this.objClasses = {
      'exotic' : true,
      'upper' : true
    };
  }
}
