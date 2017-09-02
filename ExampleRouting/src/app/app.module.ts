import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import routing module
import { AppRoutingModule } from './appRouting.module';

// Import components
import { AppComponent } from './app.component';
import { CrisisListComponent } from './Controllers/crisisList.component';
import { HeroListComponent } from './Controllers/heroList.component';
import { PageNotFoundComponent } from './Controllers/pageNotFound.component';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
