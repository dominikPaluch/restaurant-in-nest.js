import {Component, OnInit} from '@angular/core';
import {Item} from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {


  items: Item [] = [{
    name: 'Pizza',
    price: 3
  },
    {
      name: 'Salad',
      price: 2
    }];

  constructor() {
  }

  ngOnInit() {
  }


  addToCart() {
    window.alert('Added');
  }

}
