import { Injectable } from '@angular/core';
import { Interests } from './interests.model';

@Injectable({
    providedIn: 'root'
  })
  export class InterestsService {

    public interests : Interests[] = [

        {
          id: 1,
          titles: [ 
            "Visual Communication Design",
            "Law"],
          colour: "black"
        },
        {
          id: 2,
          titles: [ 
            "Entrepreneurhip",
            "Law"],
          colour: "black"
        },
        {
          id: 3,
          titles: [ 
           "Business" , "Psychology"],
          colour: "black"
        },
        {
          id: 4,
          titles: [ 
            "Nutrition",
             "Journalism"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Mechanical Engineering",
            "Marketing"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Physical Therapy",
            "Art"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Economics",
            "Fashion Design"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Information Technology",
            "Music"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Interior Architecture",
            "Cinema"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Anthropology",
            "Finance"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Exterior Architecture",
            "Health"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Industrial Engineering",
            "Chemistry"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "English Literature",
            "Performing Art"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Sport",
            "Cullinary Arts"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Problem Solving",
            "Creative Thinking"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Communication",
            "Brainstorming"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Research",
            "Collaboration"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Teamwork",
            "Critical Thinking"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Time Management",
            "Multitasking"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Storytelling",
            "Strategic Planning"],
          colour: "black"
        },
        {
          id: 5,
          titles: [ 
            "Leadership",
            "Analytical Thinking"],
          colour: "black"
        },
        
    
      ];

      getAllInterests(){
        return[...this.interests];
      }



  }