import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesListComponent } from './pages/classes-list/classes-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ClassCardComponent } from './class-card/class-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesListComponent,
    MainLayoutComponent,
    ClassCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
