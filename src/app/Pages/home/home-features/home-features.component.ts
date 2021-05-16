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
        title:'Services',
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
        title:'Vente',
        description:'Découvrez les véhicules mis en vente chez Lemaco',
        img: 'assets/icones/vente.png',
        link:'/vente'
      }
    ]
  }

}
