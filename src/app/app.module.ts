import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';




import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { UserListComponent } from './user-list/user-list.component';
import { DeptDataDisplayBoxComponent } from './dept-data-display-box/dept-data-display-box.component';
import { DepartmentDisplayBoxComponent } from './dept-data-display-box/department-display-box/department-display-box.component';
import { CourseDisplayBoxComponent } from './dept-data-display-box/course-display-box/course-display-box.component';
import { FooterComponent } from './footer/footer.component';
import { DeptDataAddComponent } from './dept-data-add/dept-data-add.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    UserListComponent,
    DeptDataDisplayBoxComponent,
    DepartmentDisplayBoxComponent,
    CourseDisplayBoxComponent,
    FooterComponent,
    DeptDataAddComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
