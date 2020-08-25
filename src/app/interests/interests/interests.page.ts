import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Interests } from './interests.model';
import { InterestsService } from './interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.page.html',
  styleUrls: ['./interests.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InterestsPage implements OnInit {

  
  public interests : Interests[];


  fill = "solid";

  changeColor(butonClass){
    //this.fill = "outline";
    //butonClass.fill = "outline";
    butonClass.colour = "blue";
    console.log(butonClass);
  }
  


  

  

  constructor(private interestsService : InterestsService) { }

  ngOnInit() {
    this.interests = this.interestsService.getAllInterests();
  }

}
