import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarItem: Array<any>=[
    {name:'home', link:'/home'},
    {name:'services', link:'/services'},
    {name:'parking', link:'/parking'},
    {name:'Vente', link:'/vente'},
    {name:'contact', link:'/contact'},

  ]

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
