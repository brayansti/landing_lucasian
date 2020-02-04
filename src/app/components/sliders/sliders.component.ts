import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.sass']
})
export class SlidersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
