import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

{path:"" , redirectTo:'products/list/man' , pathMatch:'full'},
{path:'products', 
loadChildren:()=>import('./pages/products/products.module').then((m)=>m.ProductsModule)
,canActivate:[],
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
