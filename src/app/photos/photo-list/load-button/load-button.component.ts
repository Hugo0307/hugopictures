import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hp-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
