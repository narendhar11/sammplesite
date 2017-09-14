import { Injectable } from '@angular/core';
import { Property } from './property';

const PROPERTIES : Property[] = [
      {id: 1, ptitle: 'Property 1', pdescription:'Property1 description', imageurl: '4834194361_85d5c4a5e0_b.jpg', location: 'Hyderabad', cost: 10000, bedrooms:1, bathrooms:1, yards:100, ptype:'Flat'},
      {id: 2, ptitle: 'Property 2', pdescription:'Property2 description', imageurl: '4834197589_84d75a42bd_b.jpg', location: 'Hyderabad', cost: 20000, bedrooms:2, bathrooms:2, yards:200, ptype:'Plot'},
      {id: 3, ptitle: 'Property 3', pdescription:'Property3 description', imageurl: '4834201025_e7f66118eb_b.jpg', location: 'Hyderabad', cost: 30000, bedrooms:3, bathrooms:2, yards:300, ptype:'Flat'},
      {id: 4, ptitle: 'Property 4', pdescription:'Property4 description', imageurl: '4834203945_3e56a09048_b.jpg', location: 'Hyderabad', cost: 40000, bedrooms:4, bathrooms:2, yards:400, ptype:'Plot'},
      {id: 5, ptitle: 'Property 5', pdescription:'Property5 description', imageurl: '4834194361_85d5c4a5e0_b.jpg', location: 'Secunderabad', cost: 50000, bedrooms:5, bathrooms:2, yards:500, ptype:'Flat'},
      {id: 6, ptitle: 'Property 6', pdescription:'Property6 description', imageurl: '4834197589_84d75a42bd_b.jpg', location: 'Hyderabad', cost: 60000, bedrooms:6, bathrooms:2, yards:600, ptype:'Villa'},
      {id: 7, ptitle: 'Property 7', pdescription:'Property7 description', imageurl: '4834201025_e7f66118eb_b.jpg', location: 'Hyderabad', cost: 70000, bedrooms:7, bathrooms:2, yards:700, ptype:'House'},
      {id: 8, ptitle: 'Property 8', pdescription:'Property8 description', imageurl: '4834203945_3e56a09048_b.jpg', location: 'Hyderabad', cost: 80000, bedrooms:8, bathrooms:2, yards:800, ptype:'Villa'},
    ];
@Injectable()
export class PropertyService{
  getAll() : Property[] {
    return PROPERTIES;
    
  }
  get(id: number) : Property {
     return PROPERTIES.find(p => p.id === id);
   }
   searchresults(location: string, mincost: number, maxcost: number): Property[] {
    return PROPERTIES.filter(p => {
      return p.location === location && ( p.cost > mincost && p.cost < maxcost );
    });

   }
}