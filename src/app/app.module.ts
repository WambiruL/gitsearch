import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './highlight.directive';
import { DatePipe } from './date.pipe';
import { SearchformComponent } from './searchform/searchform.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighlightDirective,
    DatePipe,
    SearchformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
