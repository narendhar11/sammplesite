import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Property } from '../property';
import { PropertyService } from "../property.service";
import { MessageService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  properties: Property[];
  constructor(private propertyService: PropertyService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) { }
  
  ngOnInit() {
    this.properties = this.propertyService.getAll();
  }

  gotoSearchList(location: string, minPrice: number, maxPrice: number){
    this.properties = this.propertyService.searchresults(location,minPrice,maxPrice);
    //this.messageService.sendMessage(this.properties);
    this.router.navigate(['./searchresults/'+location+'/'+minPrice+'/'+maxPrice]);
  }

}
