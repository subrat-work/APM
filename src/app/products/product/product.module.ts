import { NgModule } from "@angular/core";
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductsDetailComponent } from "../products-detail/products-detail.component";
import { ConvertToSpacesPipe } from "src/app/shared/convert-to-spaces.pipe";
import { RouterModule } from "@angular/router";
import { ProductsGuardGuard } from "../products-guard.guard";
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductsDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      {
        path: "products/:id",
        canActivate: [ProductsGuardGuard],
        component: ProductsDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule {}
