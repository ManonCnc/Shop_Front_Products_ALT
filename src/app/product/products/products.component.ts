import { Component, OnInit } from '@angular/core';
import { Product } from 'models/product';
import { SelectItem } from 'primeng/api';
import { ProductService } from 'service/product-service';


interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})

export class ProductsComponent implements OnInit {

  layout: string = 'grid';
  products!: Product[];
  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;
  sortKey!: string;
  totalProducts!: number;

  /** Paginator **/
  first: number = 0;
  rows: number = 10;

  constructor(private productService: ProductService) {}



  ngOnInit() {
      this.productService.getProducts().then(
        (data) => (
          this.products = data,
          this.totalProducts = data.length
          ));


      this.sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' }
    ];
  }


  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  getSeverity(product: Product) {
      switch (product.inventoryStatus) {
          case 'INSTOCK':
              return 'success';

          case 'LOWSTOCK':
              return 'warning';

          case 'OUTOFSTOCK':
              return 'danger';

          default:
              return null;
      }
  };

}
