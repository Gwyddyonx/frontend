import { Component } from '@angular/core';
import { Router } from '@angular/router';{


}
@Component({
  selector: 'app-home',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  constructor(private router: Router) {

  }

  openCreate(){
    this.router.navigate(['/contact'])
  }

}
