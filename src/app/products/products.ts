import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [], // rien à importer !
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  products: Array<any> = [];

  ngOnInit(): void {
    this.products = [
      { id: 1, name: "computer", price: 3232, selected: true },
      { id: 2, name: "printer", price: 1232, selected: false },
      { id: 3, name: "smart Phone", price: 1032, selected: true }
    ];
  }

  handelDelete(product: any) {
    const v = confirm('Êtes-vous sûr de vouloir supprimer ?');
    if (v) {
      this.products = this.products.filter(p => p.id !== product.id);
    }
  }
}
