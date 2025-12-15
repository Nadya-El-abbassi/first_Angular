import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [], // rien à importer !
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products: Array<any> = [];
  constructor(private productService : ProductService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next:  resp => {
        this.products=resp;
      },
      error: err=> {
        console.log(err);
      }
    });
  }

  handelDelete(product: any) {
    const v = confirm('Êtes-vous sûr de vouloir supprimer ?');
    if (v) {
      this.productService.deleteProduct(product).subscribe({
        next: value => { this.getAllProducts();},
        error: err => {
          console.log(err);
        }
      });
      this.getAllProducts();
    }
  }
}
