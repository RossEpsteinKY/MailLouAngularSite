import { MlcardexampleComponent } from './mlcardexample/mlcardexample.component';
import { MlhelplinksComponent } from './mlhelplinks/mlhelplinks.component';
import { MlcontactComponent } from './mlcontact/mlcontact.component';
import { MltipsComponent } from './mltips/mltips.component';
import { MlfaqComponent } from './mlfaq/mlfaq.component';
import { MlservicesComponent } from './mlservices/mlservices.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path: '', component: HomeComponent},
                        {path: 'mlservices', component: MlservicesComponent},
                        {path: 'mlfaq', component: MlfaqComponent},
                        {path: 'mltips', component: MltipsComponent},
                        {path: 'mlcontact', component: MlcontactComponent},
                        {path: 'mlhelplinks', component: MlhelplinksComponent},
                        {path: 'mlcardexample', component: MlcardexampleComponent},
                        {path: '**', component: HomeComponent}



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
