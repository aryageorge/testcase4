import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'validation-orginal';
  userData: any = {}  

  onSubmit(x: any) {
    console.log(x)
    alert('Form saved sucessfully!');
    // x.reset();
  }
}

