import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-name-list',
  templateUrl: './anime-name-list.component.html',
  styleUrls: ['./anime-name-list.component.css']
})
export class AnimeNameListComponent implements OnInit {

  // this variable stores the JSON to be displayed on the page
  // it is updated with loadAnimeList()
  animeList: JSON = null;

  // Listener variables that update depending on user's input
  inputUsername: string = "";
  selectedStatus: string = "";
  selectedSortBy: string = "";
  
  // TODO: Strings for components, could probably do with their own file. JSON?
  statusList = ["ALL","COMPLETED", "DROPPED", "ON HOLD", "WATCHING", "PLAN TO WATCH"];
  sortByList = ["TITLE","SCORE"];

  constructor() { }

  ngOnInit(): void {
  }

  updateStatus(status: any): void {
    this.selectedStatus = status;
  }

  updateSortBy(sortBy: any): void {
    this.selectedSortBy = sortBy;
  }

  load(): void {
    if (this.selectedSortBy == "" && this.selectedSortBy == "") return;
    // TODO: need to convert the currently selected to correct format before running this, 
    // at least must be done before calling fetch()
    this.loadAnimeList();
  }
  
  // IMPORTANT: this method can only be ran once every 4 seconds otherwise you'll get blocked from the API
  // I assume they have this in place to avoid ddos and api abuse
  async loadAnimeList() {
    // this api call can be customised, the plan is to break this down 
    // like 'user' + user + '/' + listType + '/' + listTypeStatus (completed/dropped etc)
    let response = await fetch('https://api.jikan.moe/v3/user/' + this.inputUsername + '/animelist/' + this.selectedStatus);
    let data = await response.json();
    // don't really know what stringify does ngl
    let jsonData = JSON.stringify(data);
    // this updates animeList, the .anime just narrows down the JSON and avoids dealing with the default response/
    this.animeList = JSON.parse(jsonData).anime;
    // debugging purposes, look in developer tools console to see this every time load is clicked
    console.log(this.animeList);
    // TODO: resets username in input, need to store the 'current user' in a variable before wiping in future
    this.inputUsername = "";
  }

}
