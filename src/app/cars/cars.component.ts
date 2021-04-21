import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CARS } from '../mock-cars';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  car: Car = {
    id: 1,
    name: 'Bugatti'
  }

  cars = CARS;

  constructor() { }

  ngOnInit(): void {
  }

}
