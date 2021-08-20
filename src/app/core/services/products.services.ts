import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "src/environments/environment";



@Injectable()
export class ProductService  {
rout:string='/products'
imgs=[
'https://images.unsplash.com/photo-1592060716443-09de6568bcc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1629290439635-80e8740a0c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
'https://images.unsplash.com/photo-1620548125424-a863ce5445c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1620548479536-dafe553f4414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
]
sizes=[
 "X",
 "XS",
 "L",
 "M",
]


  Data = [
    { name: 'LON 1very good jeans', popularity: 10, created: 'Thu Aug 19 2021 17:45:07', color: ['red', 'green', 'back', 'blue'], type: 't-shirts', size: this.sizes, id: 'm38448484484484r8', price: 200, discount: 10, photos: this.imgs },
    { name: 'LON old 21very good jeans', popularity: 329, created: 'Thu Aug 1 2021 17:45:07', color: ['yellow', 'green', 'back', 'Orange'], type: 't-shirts', size: this.sizes, id: 'b3844848448e44848', price: 300, discount: 10, photos: this.imgs },
    { name: 'LON 3v2ery good jeans', popularity: 139, created: 'Thu Aug 9 2021 17:45:07', color: ['red', 'yellow', 'back', 'blue'], type: 't-shirts', size: this.sizes, id: 'a38448484484484r8', price: 400, discount: 10, photos: this.imgs },
    { name: 'LON 4ve3ry good jeans', popularity: 339, created: 'Thu Aug 19 2021 17:45:07', color: ['red', 'green', 'back', 'blue'], type: 'dress shirts', size: this.sizes, id: 's38448484f4844848', price: 500, discount: 10, photos: this.imgs },
    { name: 'LON 5ver4y good jeans', popularity: 439, created: 'Thu Aug 9 2021 17:45:07', color: ['Orange', 'green', 'back', 'blue'], type: 'dress shirts', size: this.sizes, id: '43844848448d44848', price: 160, discount: 10, photos: this.imgs },
    { name: 'LON 6ver4y good jeans', popularity: 359, created: 'Thu Aug 9 2021 17:45:07', color: ['red', 'green', 'Orange', 'blue'], type: 'dress shirts', size: this.sizes, id: 'r38448484484s4848', price: 14300, discount: 10, photos: this.imgs },
    { name: 'LON 7very good jeans', popularity: 369, created: 'Thu Aug 11 2021 17:45:07', color: ['red', 'green', 'back', 'blue'], type: 'sweatshirts', size: this.sizes, id: 'e3844848448448ad48', price: 10430, discount: 10, photos: this.imgs },
    { name: 'LON  8ver5y good jeans', popularity: 379, created: 'Thu Aug 13 2021 17:45:07', color: ['red', 'Orange', 'back', 'blue'], type: 'tank tops', size: this.sizes, id: 'w3844848448448ds48', price: 1004, discount: 10, photos: this.imgs },
    { name: 'LON high one pop 9ver6y good jeans', popularity: 1179, created: 'Thu Aug 14 2021 17:45:07', color: ['pink', 'green', 'yellow', 'blue'], type: 'tank tops', size: this.sizes, id: 'ew38ds4484844844848', price: 10043, discount: 10, photos: this.imgs },
    { name: 'LON new low one pop 100ver6y good jeans', popularity: 2, created: 'Thu Aug 15 2021 17:45:07', color: ['yellow', 'green', 'back', 'blue'], type: 'tank tops', size: this.sizes, id: '2384ds484844844848', price: 10220, discount: 10, photos: this.imgs },
  ]

constructor(protected http:HttpClient){

}

query(id:string){
// man / woman / kids    
return this.http.get(environment.baseUrl+this.rout+'/'+id);
}


queryOne(id:string){
return this.http.get(environment.baseUrl+this.rout+'/'+id);
}


dummyData(){
return of(this.Data)
}


dummyDataById(id:string){

let product=this.Data.find((value)=>{
  return value.id===id
})

console.log(product)
return of(product)


}


}