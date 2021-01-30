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

  constructor() { }

  ngOnInit(): void {
  }
  
  // IMPORTANT: this method can only be ran once every 4 seconds otherwise you'll get blocked from the API
  // I assume they have this in place to avoid ddos and api abuse
  async loadAnimeList(user = "sxeix") {
    // this api call can be customised, the plan is to break this down 
    // like 'user' + user + '/' + listType + '/' + listTypeStatus (completed/dropped etc)
    let response = await fetch('https://api.jikan.moe/v3/user/' + user + '/animelist/completed');
    let data = await response.json();
    // don't really know what stringify does ngl
    let jsonData = JSON.stringify(data);
    // this updates animeList, the .anime just narrows down the JSON and avoids dealing with the default response/
    this.animeList = JSON.parse(jsonData).anime;
    // debugging purposes, look in developer tools console to see this every time load is clicked
    console.log(this.animeList);
  }

}
