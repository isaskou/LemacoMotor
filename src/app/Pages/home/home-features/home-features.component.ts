import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent implements OnInit {

  features:any = [];
  constructor() { }

  ngOnInit(): void {
    this.features=[
      {
        title:'Garage',
        description:'Des techniciens au service de vos oldtimers anglais',
        img: 'assets/icones/outil-cle-et-boulon-et-contour-de-tournevis (1).png',
        link:'/services'
      },
      {
        title:'Parking',
        description:'Vos véhicules à l\'abri dans un local sécurisé',
        img: 'assets/icones/garage.png',
        link:'/parking'
      },
      {
        title:'Contact',
        description:'Nous restons à votre disposition pour toute question complémentaire',
        img: 'assets/icones/contact.png',
        link:'/contact'
      }
    ]
  }

}
