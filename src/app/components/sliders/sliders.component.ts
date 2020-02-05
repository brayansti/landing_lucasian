import { Component, OnInit } from '@angular/core';
import { ApirestService } from "../../services/apirest.service";

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  constructor(private service : ApirestService) { }

  apiData:Array<any>;

  ngOnInit() {
    // this.service.getData()
    this.service.getData().subscribe( data=>{
      console.log(data);
      this.apiData = data;
    } )
  }

  config: any = {
    autoplay: 3000, // Autoplay option having value in milliseconds
    initialSlide: 0, // Slide Index Starting from 0
    slidesPerView: 3, // Slides Visible in Single View Default is 1
    spaceBetween: 30, // Space between each Item
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
  };

  setBgImage(index){
    let numberImg = index%2 === 0 ? 1 : 2;
    return `url(../assets/img/foto${numberImg}.PNG)`
  }

}
