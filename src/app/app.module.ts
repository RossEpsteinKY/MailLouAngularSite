import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MlservicesComponent } from './mlservices/mlservices.component';
import { FooterComponent } from './footer/footer.component';
import { MlfaqComponent } from './mlfaq/mlfaq.component';
import { MltipsComponent } from './mltips/mltips.component';
import { MlcontactComponent } from './mlcontact/mlcontact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MlcardexampleComponent } from './mlcardexample/mlcardexample.component';
import { MlhelplinksComponent } from './mlhelplinks/mlhelplinks.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MlservicesComponent,
    FooterComponent,
    MlfaqComponent,
    MltipsComponent,
    MlcontactComponent,
    MlcardexampleComponent,
    MlhelplinksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
