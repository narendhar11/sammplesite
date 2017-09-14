import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PropertydetailsComponent } from "./propertydetails/propertydetails.component";
import { SearchresultsComponent } from "./searchresults/searchresults.component";


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent },
  {
    path: 'property/:id', 
    component: PropertydetailsComponent 
  },
  {
    path: 'searchresults', 
    component: SearchresultsComponent 
  },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true })],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
