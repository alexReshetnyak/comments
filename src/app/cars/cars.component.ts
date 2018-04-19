import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  addCarStatus = '';
  InputVal = 'Default text';

  addCar() {
    this.addCarStatus = 'Added';
  }

  onChange(val) {
    this.InputVal = val.target.value;
  }
}
