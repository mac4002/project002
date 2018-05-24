import { Component, OnInit } from '@angular/core';
import { Product, TAB_PRODUCT } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  private products: Product[];
  public voiture: Product;
  private moyenne: number;
  private notes;

showContent: Boolean;

patisseries: string [];
dayOfWeek: string;


  constructor() {
    this.showContent = true;
    this.patisseries = ['Cupake', 'Fraisier', 'Meringue'];
    this.dayOfWeek = 'Jeudi';
    this.products = TAB_PRODUCT;
    this.moyenne = 0;
    this.notes = [];
   }
   private calculMoyenne(note: number) {
     let somme = 0;
     this.notes.push(note);
      this.notes.forEach((elem) => somme += parseInt(elem, 10));
     this.moyenne = somme / this.notes.length;
     console.log(note);
   }

  ngOnInit() {
  }

}
