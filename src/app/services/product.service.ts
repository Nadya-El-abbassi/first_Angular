import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {
  }
  getAllProducts(){
    return this.http.get("http://localhost:8080/products");
}
deleteProduct(product:any):Observable<Object>{
    return this.http.delete("http://localhost:8080/product/"+product.id);
}
}
