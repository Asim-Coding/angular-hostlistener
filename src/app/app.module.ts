import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HoverDirective } from './hover.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,HoverDirective,HighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
