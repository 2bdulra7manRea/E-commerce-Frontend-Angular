import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {


@Input() Product:any={name:'A very good jeans' , id:'384484844844848' , price:100 , discount:10 , photo:'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80'}


faHeart=faHeart
liked:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }


  Liked(){
if(this.liked){
  this.liked=false
}else{
  this.liked=true;
}
console.log(this.liked)
  }

}
