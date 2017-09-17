import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';

//Property Services
import { PropertyService } from './property.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PropertydetailsComponent } from './propertydetails/propertydetails.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { MessageService } from './shared.service';
import { ReactiveFormsModule } from '@angular/forms'; 
const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true }); 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PropertydetailsComponent,
    SearchresultsComponent 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouting,
    ReactiveFormsModule
  ],
  providers: [PropertyService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
