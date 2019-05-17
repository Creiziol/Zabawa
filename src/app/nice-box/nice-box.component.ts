import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nice-box',
  templateUrl: './nice-box.component.html',
  styleUrls: ['./nice-box.component.css']
})
export class NiceBoxComponent implements OnInit {
  show: boolean = false;
  constructor() { }

  ngOnInit() {


  }

  wowow() {
    this.show = !this.show;



  }



}


