import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeNameListComponent } from './anime-name-list/anime-name-list.component';
import { FormsModule } from '@angular/forms';
import { AnimeStatusDropdownComponent } from './anime-status-dropdown/anime-status-dropdown.component';
import { HeaderComponent } from './header/header.component';
import { TruncationPipe } from '../../libs/pipes/truncation.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    AnimeNameListComponent,
    AnimeStatusDropdownComponent,
    HeaderComponent,
    TruncationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
