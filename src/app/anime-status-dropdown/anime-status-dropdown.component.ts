import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-anime-status-dropdown',
  templateUrl: './anime-status-dropdown.component.html',
  styleUrls: ['./anime-status-dropdown.component.css']
})
export class AnimeStatusDropdownComponent implements OnInit {

  @Input() name: string;
  @Input() list: Array<string>;
  @Output() selected = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(status: any) {
    console.log(status);
    this.selected.emit(status);
  }

}
