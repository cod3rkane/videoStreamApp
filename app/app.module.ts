import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { VideoPlayComponent } from './Components/VideoPlay.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, VideoPlayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
