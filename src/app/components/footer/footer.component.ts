import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public path:string;
  constructor(private router: Router){    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.path = event.url.split('/')[1];
      }
    });
  }  

}
