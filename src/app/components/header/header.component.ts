import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menuData: string;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.menuData)
    }, 1000);
  }

}
