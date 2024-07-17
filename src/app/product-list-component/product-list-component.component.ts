import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent {
  products: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe((data: any) => {
      this.products = data;
    });
  }
}
