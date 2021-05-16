import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverModule} from 'ngx-bootstrap/popover';
import {BootstrapIconsModule} from 'ng-bootstrap-icons';
import {allIcons} from 'ng-bootstrap-icons/icons';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { ParkingComponent } from './Pages/parking/parking.component';
import { ServicesComponent } from './Pages/services/services.component';
import { VenteComponent } from './Pages/vente/vente.component';
import { HomeBannerComponent } from './Pages/home/home-banner/home-banner.component';
import { HomeFeatureCardComponent } from './Pages/home/home-feature-card/home-feature-card.component';
import { HomeFeaturesComponent } from './Pages/home/home-features/home-features.component';
import { ServicesTitleComponent } from './Pages/services/services-title/services-title.component';
import { ParkingTitleComponent } from './Pages/parking/parking-title/parking-title.component';
import { ParkingAccrocheComponent } from './Pages/parking/parking-accroche/parking-accroche.component';
import { ParkingIconesComponent } from './Pages/parking/parking-icones/parking-icones.component';
import { ParkingServiceComponent } from './Pages/parking/parking-service/parking-service.component';
import { ContactAdresseComponent } from './Pages/contact/contact-adresse/contact-adresse.component';
import { ContactTitleComponent } from './Pages/contact/contact-title/contact-title.component';
import { ContactMapComponent } from './Pages/contact/contact-map/contact-map.component';
import { VenteTitleComponent } from './Pages/vente/vente-title/vente-title.component';
import { VentePreviousNextComponent } from './Pages/vente/vente-previous-next/vente-previous-next.component';
import { AustinComponent } from './Pages/vente/vente-aVendre/austin/austin.component';
import { BlogComponent } from './Pages/vente/blog/blog.component';
import { BlogCardsComponent } from './Pages/vente/blog-cards/blog-cards.component';
import { DiapoComponent } from './Pages/vente/vente-aVendre/austin/diapo/diapo.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ContactComponent,
    HomeComponent,
    ParkingComponent,
    ServicesComponent,
    VenteComponent,
    FooterComponent,
    NavbarComponent,
    HomeBannerComponent,
    HomeFeatureCardComponent,
    HomeFeaturesComponent,
    ServicesTitleComponent,
    ParkingTitleComponent,
    ParkingAccrocheComponent,
    ParkingIconesComponent,
    ParkingServiceComponent,
    ContactAdresseComponent,
    ContactTitleComponent,
    ContactMapComponent,
    VenteTitleComponent,
    VentePreviousNextComponent,
    AustinComponent,
    BlogComponent,
    BlogCardsComponent,
    DiapoComponent,
    NotFoundComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    BrowserAnimationsModule, 
    BootstrapIconsModule.pick(allIcons), 
    NgbModule,
    NgbCarouselModule
    
  ],
  exports:[
    ModalModule,
    PopoverModule,
    BootstrapIconsModule, 
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
