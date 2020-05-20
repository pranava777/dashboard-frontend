import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  static API_URL="http://localhost:8080";   //static variable for backend URL to be called while
                                            //giving backend call
}
