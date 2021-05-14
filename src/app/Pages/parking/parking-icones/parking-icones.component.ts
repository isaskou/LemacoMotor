import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-icones',
  templateUrl: './parking-icones.component.html',
  styleUrls: ['./parking-icones.component.scss']
})
export class ParkingIconesComponent implements OnInit {
  iconesLigne1 = [
    {
    description:'parking sécurisé, badges et alarme', 
    icone: 'lock'
  },
  {
    description:'charge de la batterie',
    icone: 'battery_full'
  },
  {
    description:'Niveaux',
    icone: 'colorize'
  },
  {
    description:'Pression des pneus',
    icone: 'settings'
  } 
];

iconesLigne2 = [
  {
  description:'Accès 24/7', 
  icone: 'directions_car'
},
{
  description:'Housse de protection',
  icone: 'night_shelter'
},
{
  description:'Mise en route de la voiture',
  icone: 'offline_bolt'
},
{
  description:'',
  icone: ''
}
];

  constructor() { }

  ngOnInit(): void {
  }

}
