import { Component, OnInit } from "@angular/core";
import { IProduct } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: "pm-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter? this.products.filter(item =>item.productName.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1): this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private productService : ProductService) {
   
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(message: string): void {}
}
