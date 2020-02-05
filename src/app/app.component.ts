import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lucasian';

  menuItems:object = [
    { name:'Menu 1', url:'#'},
    { name:'Menu 2', url:'#'},
    { name:'Menu 3', url:'#'}
  ]
}
