import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LandingComponent } from './shared/components/landing/landing.component';
import { IntroductionComponent } from './shared/components/introduction/introduction.component';
import { RepeatArrayDirective } from './repeat-array.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    IntroductionComponent,
    RepeatArrayDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
