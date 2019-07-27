import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component';
import { DecorationComponent } from './decoration/decoration.component';
import { CateringComponent } from './catering/catering.component';
import { PhotoComponent } from './photo/photo.component';
import { VenueComponent } from './venue/venue.component';
import { JoinComponent } from './join/join.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { RedirectComponent } from './redirect/redirect.component';
const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'events',component:EventsComponent},
  {path:'contact',component:ContactComponent},
  {path:'services/decoration',component:DecorationComponent},
  {path:'decoration',component:DecorationComponent},
  {path:'catering',component:CateringComponent},
  {path:'services/catering',component:CateringComponent},
  {path:'photo',component:PhotoComponent},
  {path:'services/photo',component:PhotoComponent},
  {path:'venue',component:VenueComponent},
  {path:'services/venue',component:VenueComponent},
  {path:'join',component:JoinComponent},
  {path:'view',component:ViewComponent},
  {path:'join/view',component:ViewComponent},
  {path:'join/header',component:ViewComponent},
  {path:'join/contact',component:ViewComponent},
  {path:'services/join',component:JoinComponent},
  {path:'events/join',component:JoinComponent},
  {path:'redirect',component:RedirectComponent},
  {path:'contact/join',component:JoinComponent},
  
  {path:'about/join',component:JoinComponent},
  {path:'register',component:RegisterComponent},
  {path:'join/register',component:RegisterComponent},
  {path:'update',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
