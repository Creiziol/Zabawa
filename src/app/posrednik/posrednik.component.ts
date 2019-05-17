import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posrednik',
  templateUrl: './posrednik.component.html',
  styleUrls: ['./posrednik.component.css']
})
export class PosrednikComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  zlapEvent(tresc) {
    console.log(tresc);
    this.tresc = tresc;

  }

  usunTresc() {
    this.tresc = '';
  }


  trescv2: String;
  tresc: string;



}
