
import { Component } from '@angular/core';
import { Api3menuService } from './api3menu.service';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component {

  locationsPares: any[] = [];

  constructor(private serviciopar: Api3menuService) {}

  ngOnInit() {
    this.serviciopar.getLocacionwithIDPar().subscribe((data) => {
      this.locationsPares = data.results.filter((location: any) => location.id % 2 === 0);
    });
  }
  
}
