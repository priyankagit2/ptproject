import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DecorationComponent } from './decoration/decoration.component';
import { CateringComponent } from './catering/catering.component';
import { PhotoComponent } from './photo/photo.component';
import { VenueComponent } from './venue/venue.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JoinComponent } from './join/join.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    EventsComponent,
    ContactComponent,
    HomeComponent,
    DecorationComponent,
    CateringComponent,
    PhotoComponent,
    VenueComponent,
    LoginComponent,
    
    JoinComponent,
    
    RegisterComponent,
    
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
