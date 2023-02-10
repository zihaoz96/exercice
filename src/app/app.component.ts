import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  checkSession(){
    return sessionStorage.getItem('username')
  }

  logout(){
    sessionStorage.removeItem('username')
    location.reload()
  }
}
