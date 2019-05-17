
import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wprowadzanie',
  templateUrl: './wprowadzanie.component.html',
  styleUrls: ['./wprowadzanie.component.css']
})
export class WprowadzanieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.emiterTresc.emit(this.tresc);

  }

  tresc: string;

  @Output()
  emiterTresc: EventEmitter<string> = new EventEmitter();


}
