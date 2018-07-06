import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'
import { AppComponent } from './app.component';
import { RadioComponent } from './radio/radio.component';

const routes : Route[] = [
  { path:'', component: RadioComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
