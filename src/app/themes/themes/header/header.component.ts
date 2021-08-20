import { Component, OnInit } from '@angular/core';
import { faUser,faSearch,faShoppingBasket,faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars=faBars
  faUser=faUser;
  faSearch=faSearch;
  faShoppingBasket=faShoppingBasket;  
  
  isCollapsed=true
  constructor() { }

  ngOnInit(): void {
  }

}
