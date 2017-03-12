import { Component, OnInit } from '@angular/core';
import { ItemService } from './../item.service';

import { Item } from './../item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[];
  constructor(private itemService: ItemService) {
    this.items = [];
  }

  ngOnInit() {
  }

  getItems(todoId: number): void {
    this.itemService.getItems(todoId)
    .subscribe(items =>  this.items = items);
  }

}
