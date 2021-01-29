import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-name-list',
  templateUrl: './anime-name-list.component.html',
  styleUrls: ['./anime-name-list.component.css']
})
export class AnimeNameListComponent implements OnInit {

  animeList: JSON = null;

  constructor() { }

  ngOnInit(): void {
  }
  
  async loadAnimeList(user = "sxeix") {
    let response = await fetch('https://api.jikan.moe/v3/user/' + user + '/animelist/completed');
    let data = await response.json();
    let jsonData = JSON.stringify(data);
    this.animeList = JSON.parse(jsonData).anime;
    console.log(this.animeList);
  }

}
