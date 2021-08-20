import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NpnSliderModule } from "npn-slider";
import { ProductService } from 'src/app/core/services/products.services';
const routes:Routes=[
{path:'list/:id' , component:ProductsListComponent},
{path:'details/:id' , component:ProductsDetailsComponent}
]



@NgModule({
  declarations: [ProductsListComponent, ProductsItemComponent, ProductsDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NpnSliderModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  providers:[ProductService]
})

export class ProductsModule { }
