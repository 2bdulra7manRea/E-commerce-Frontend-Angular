import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/core/services/products.services';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  faHeart=faHeart
  indexImg=0;
  product:any;
  numberQantity:number=1;
  constructor(private activatedRout:ActivatedRoute,private productApi:ProductService) { }

  ngOnInit(): void {
    this.initComponet()
  }


  initComponet(){

    this.activatedRout.params.subscribe((params)=>{
      const id = params.id;
      if(!!id){
        // this is for real data
        this.productApi.queryOne(id).subscribe((res)=>{
          if(!!res){
            this.product=res;
          }
        },(err)=>{
          // this is for testing by dummy data
          this.productApi.dummyDataById(id).subscribe((res)=>{
            this.product=res;
          })
        })

      }
    })

  }

  Qantity(action:string){
    if(action==='add'){
      this.numberQantity++;
    }else if(action==='remove' &&this.numberQantity!==1){

      this.numberQantity--;
    }
  }



}
