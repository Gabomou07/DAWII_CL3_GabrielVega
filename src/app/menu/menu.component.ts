import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private route: ActivatedRoute, private router: Router){

  }

  onNavigateToHomePage(): void{
    this.router.navigate(['home'], {relativeTo: this.route});
  }

  onNavigateToMenu1Page(): void{
    this.router.navigate(['menu1'], {relativeTo: this.route});
  }

  onNavigateToMenu2Page(): void{
    this.router.navigate(['menu2'], {relativeTo: this.route});
  }

  onNavigateToMenu3Page(): void{
    this.router.navigate(['menu3'], {relativeTo: this.route});
  }
}
