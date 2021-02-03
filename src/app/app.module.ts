import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeNameListComponent } from './anime-name-list/anime-name-list.component';
import { FormsModule } from '@angular/forms';
import { AnimeStatusDropdownComponent } from './anime-status-dropdown/anime-status-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeNameListComponent,
    AnimeStatusDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
