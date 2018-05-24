import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, TAB_PRODUCT } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  @Input() private product: Product;
  @Output() private voted: EventEmitter<number>;

  private router: Router;
  constructor(
    route: ActivatedRoute,
    router: Router
  ) {
    this.router = router;
    this.voted = new EventEmitter<number>();
    const id: number = parseInt(route.snapshot.paramMap.get('id'), 10);
    console.log(`le nombre correspondant à l\'id passé dans la route est: ${id}`);

    if (!isNaN(id)) {
      this.getProduct(id);
    } else {
     this.router.navigate(['/not-found']);
    // throw new Error('L\'id passe est incorrect');
    }
  }

  private onVoted (note: number): void {
    this.voted.emit(note);
    console.log('Note selectionné ' + note);
  }
  private getProduct(id: number): void {
    let products: Product[] = TAB_PRODUCT;


/* const tableauTrie = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].id === id) {
    tableauTrie.push(products[i]);
  }
}
 */



    products = products.filter(
      function(elem) {
        if (elem.id === id) {
          return true;
        } else {
          // this.router.navigate(['/not-found']);
         return false;
        }
      }

    );
    console.log(products);
    // products =products.filter(elem => elem.id === id);  // ES6
    if (products.length === 1) {
      // this.product = products[0];
      this.product = products[0];
    } else {
      // throw new Error(`Produit non-trouvé (ou plusieurs)`);
      this.router.navigate(['/not-found']);
    }
  }
  ngOnInit() {
  }

}
