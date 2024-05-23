import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAllSimple().subscribe((products) => {
      this.products = products.map((product) => {
        let images = product.images.map((image) => {
          return image.replace('["', '').replace('"]', '');
        });
        return { ...product, images };
      });
    });
  }
}
