import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronDown ,faSlidersH} from '@fortawesome/free-solid-svg-icons';
import * as _ from 'lodash';
import { Product } from 'src/app/core/models/products.model';
import { ProductService } from 'src/app/core/services/products.services';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  isCollapsed:boolean=true;
  faSlidersH=faSlidersH;
  title:any;
faChevronDown=faChevronDown

products:any[]=[];
rangePrices:any;
checkBoxValueType:string=''
productsItems:any;
pageSize:number=10;
currentPage:number=0;
  constructor(private activatedRout:ActivatedRoute , private productApi:ProductService) { }

  ngOnInit(): void {
    this.initComponent();
    
  }


  initComponent(){
    this.activatedRout.params.subscribe((params)=>{
      const id=params.id;
      if(!!id){
        this.title=id;
        this.productApi.query(id).subscribe((res)=>{
          if(!!res){
           this.productsItems=res; 
          }else{
           this.productApi.dummyData().subscribe((res)=>{
             this.productsItems=res;
           })
          }
        this.getHighestLowestPrice(this.productsItems)
        this.products= Array.from(this.productsItems)
        },(err)=>{
          this.productApi.dummyData().subscribe((res)=>{
            this.productsItems=res;
          this.getHighestLowestPrice(this.productsItems)
          this.products= Array.from(this.productsItems).slice(0,this.pageSize);
          })
         
        })
      }
    })

  }




  getValueProductType(v:any){
    this.filterProducts('type',v.target.name)
  }


filterCategories(arr:any[] ,type:string){
let filterName:string[]=[];

arr.forEach(element => {
if(type==='color' || type==='size'){
filterName.push(...element[type])    
}else{
filterName.push(element[type])  
}
});


let x= _.countBy(filterName);
let arrOfNumberOfItems=  Object.values(x);
let arrOfNamesOfItems = Object.keys(x)
let y:any[] =[]
for (let index = 0; index < arrOfNamesOfItems.length; index++) { 
y.push({name:arrOfNamesOfItems[index] ,number:arrOfNumberOfItems[index]})
}
 return y;
}



filterProducts(property:string , value:string){
//this.isCollapsed=false;  

this.isCollapsed=true;
 this.products=this.productsItems.filter((res:any)=>{
  if(property==='color' || property==='size'){
    return res[property].includes(value)
  }else{
   return res[property]===value 
  }
})

}


onSliderChange(v:any){
  this.isCollapsed=true;
  this.products=this.productsItems.filter((res:any)=>{
    return (res.price>=v[0])&&(res.price<=v[1]) 
  })
}


getHighestLowestPrice(products:any[]){
let arrOfPirce:any[]=[]
products.forEach(element => {
arrOfPirce.push(element.price);
});

const maxValue= _.max(arrOfPirce);
const minValue=_.min(arrOfPirce);

this.rangePrices={minValue,maxValue,}
}




  sortSelection(v: any) {
    this.isCollapsed=true;
    if (v.target.value === 'popular') {
      this.products.sort((a, b) => {
        return  b.popularity-a.popularity
      })
    } else if (v.target.value === 'new') {
      this.products.sort((a, b) => {
        let aDate: any = new Date(a.created);
        let bDate: any = new Date(b.created);
        return bDate-aDate;
      })
    }else{
        this.products=Array.from(this.productsItems);
    }
  }


  showProductsSelection(v:any){
    this.isCollapsed=true;
    let endNumber=Number(v.target.value);
   this.products= Array.from(this.productsItems).slice(0,endNumber)
  }




  // you have 60 items
  // page size : number of items you want =10
  // current page 
getPageSize(){
  let start=this.currentPage*this.pageSize;
  let end=this.pageSize+(this.pageSize*this.currentPage) ;
  this.products= this.productsItems.slice(start,end)  
}

Pagination(check:string){
let numberOfPages=this.productsItems.length/this.pageSize; 
if(check==='next'&&!((this.currentPage+1)===numberOfPages)){
this.currentPage++;  
this.getPageSize(); 
}else if(check==='previous'&&!((this.currentPage)===0)){
  this.currentPage--;  
this.getPageSize(); 
}
}


}


