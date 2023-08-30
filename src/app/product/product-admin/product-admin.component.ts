import { Component, OnInit } from '@angular/core';
import { Product } from 'models/product';
import { ProductService } from 'service/product-service';


@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss'],
  providers: [ProductService]

})

export class ProductAdminComponent implements OnInit {

    products!: Product[];
    visible: boolean = false;
    selectedProducts: Product[] = [];
    value: string = "";
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
    }

    addOrEditProduct(name : string) {
        if(this.selectedProducts[0] !== undefined){
            this.products.forEach(el => {
                if(el.id === this.selectedProducts[0].id){
                    el.name = name;
                }
            });
        }else{
            this.products.push({id: Math.floor(Math.random() * 100).toString(), code: Math.floor(Math.random() * 100).toString(), name: name});
        }
        this.selectedProducts = [];
        this.visible = false;
        this.totalProducts = this.products.length;
    }

    editProduct(product: Product) {
        if(product){
            this.selectedProducts = [];
            this.selectedProducts.push(product);
        }
        this.showDialog();
    }

    deleteProduct(product: Product = undefined) {
        if(product){
            this.products.splice(this.products.indexOf(product), 1);
        }
        else if(this.selectedProducts){
            this.selectedProducts.forEach(el => {
                this.products.splice(this.products.indexOf(el), 1);
            });
        }
        this.totalProducts = this.products.length;
    }

    showDialog() {
        if(this.selectedProducts){
            this.selectedProducts.forEach(el => {
                this.value = el.name;
            });
        }
        this.visible = true;
    }

}
