import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-status-dropdown',
  templateUrl: './anime-status-dropdown.component.html',
  styleUrls: ['./anime-status-dropdown.component.css']
})
export class AnimeStatusDropdownComponent implements OnInit {

  @Input() name: string;
  @Input() list: Array<string>;
  selected = "null";
  constructor() { }

  ngOnInit(): void {
  }

}
