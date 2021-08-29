import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-name-list',
  templateUrl: './anime-name-list.component.html',
  styleUrls: ['./anime-name-list.component.css']
})
export class AnimeNameListComponent implements OnInit {

  animeList: JSON = null;

  inputUsername: string = "";
  selectedStatus: string = "";
  selectedSortBy: string = "";
  
  // TODO: Strings for components, could probably do with their own file. JSON?
  statusList = ["All","Completed", "Dropped", "On hold", "Watching", "Plan to watch"];
  sortByList = ["Title","Score"];

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
  
  async loadAnimeList() {
    let response = await fetch('https://api.jikan.moe/v3/user/' + this.inputUsername + '/animelist/' + this.selectedStatus.toUpperCase());
    let data = await response.json();
    let jsonData = JSON.stringify(data);
    // Need to handle case for when there is no anime
    let unsortedAnime = JSON.parse(jsonData).anime;
    if (this.selectedSortBy === 'Score') {
      this.animeList = unsortedAnime.sort(function(a, b){
        return b.score - a.score;
      });
    } else if (this.selectedSortBy === 'Title') {
      this.animeList = unsortedAnime.sort(function(a, b){
        return a.title - b.title;
      });
    }
    console.log(this.animeList);
    this.inputUsername = "";
  }

}
