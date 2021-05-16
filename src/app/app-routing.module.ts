import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ParkingComponent } from './Pages/parking/parking.component';
import { ServicesComponent } from './Pages/services/services.component';
import { AustinComponent } from './Pages/vente/vente-aVendre/austin/austin.component';
import { VenteComponent } from './Pages/vente/vente.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'services', component:ServicesComponent},
  {path:'parking', component:ParkingComponent},
  {path:'vente', component:VenteComponent},
  {path:'contact', component:ContactComponent},
  {path: 'austin', component:AustinComponent},
  {path:'notFound', component:NotFoundComponent},
  {path: '**', redirectTo: '/notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    scrollOffset: [0, 0],
    anchorScrolling: "enabled",
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
