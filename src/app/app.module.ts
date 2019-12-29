import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { TextNodesComponent } from './text-nodes/text-nodes.component';
import { AddNodesComponent } from './add-nodes/add-nodes.component';
import { EditingNodesComponent } from './editing-nodes/editing-nodes.component';
import { EditingСategoryComponent } from './editing-category/editing-category.component';

const routes = [
   {path: '', component: AppComponent},
   {path: 'addnodes', component: AddNodesComponent},
   {path: 'editnodes', component: EditingNodesComponent},
   {path: 'editcategory', component: EditingСategoryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TextNodesComponent,
	AddNodesComponent,
	EditingNodesComponent,
	EditingСategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
