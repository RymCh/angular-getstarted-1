import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
//output & eventemitter pour passer de child à parent
//input l'inverse
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}