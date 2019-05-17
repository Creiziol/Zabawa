import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-czysz',
  templateUrl: './czysz.component.html',
  styleUrls: ['./czysz.component.css']
})
export class CzyszComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usun() {
    this.usunEmit.emit();

  }

  @Output()
  usunEmit: EventEmitter<string> = new EventEmitter();

}
