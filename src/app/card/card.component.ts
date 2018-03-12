import { Component, OnInit, Input } from '@angular/core';
import { Icard } from '../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //VARS
  @Input() card : Icard;
  tags : any = {};

  constructor() { }

  ngOnInit() {
    this.tags.details = 'detalles'
  }

}
