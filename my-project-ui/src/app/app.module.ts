import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectComponent } from './feature/project/project.component';
import { TopLayerComponent } from './feature/project/top-layer/top-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    TopLayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
