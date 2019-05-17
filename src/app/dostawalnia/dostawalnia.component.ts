import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dostawalnia',
  templateUrl: './dostawalnia.component.html',
  styleUrls: ['./dostawalnia.component.css']
})
export class DostawalniaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  odbierz: string;
  @Input()
  odbierzv2: string;


}
