import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  @Output() drop:EventEmitter<any> = new EventEmitter();

  MoviesWatched = [
    'Transformers'
  ];

  ngOnInit() {
  }

  onDrop(event: CdkDragDrop<string[]>) {
    // this.ss.drop(event);
    this.drop.emit(event)
  }

}