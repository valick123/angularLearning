import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instagram';
  buttonText:string = "button text from parent"
  parentFunction(data):any{
    alert(data)
  }
}
