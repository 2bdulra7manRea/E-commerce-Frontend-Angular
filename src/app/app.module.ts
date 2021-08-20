import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './pages/products/products.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemesModule } from './themes/themes/themes.module';
import { HeaderComponent } from './themes/themes/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    ThemesModule,
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents:[HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
