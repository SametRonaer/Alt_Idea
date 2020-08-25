import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-whatisaltidea',
  templateUrl: './whatisaltidea.page.html',
  styleUrls: ['./whatisaltidea.page.scss'],
})
export class WhatisaltideaPage implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  constructor() { }

  ngOnInit() {
  }

}
