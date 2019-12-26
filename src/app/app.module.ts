import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { TextNodesComponent } from './text-nodes/text-nodes.component';
import { AddNodesComponent } from './add-nodes/add-nodes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TextNodesComponent,
	AddNodesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
